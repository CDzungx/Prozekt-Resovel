import gpflag from "@assets/img/Co-GP.webp";
import vnflag from "@assets/img/Co-Vietnam.webp";
import { useStore } from "@nanostores/solid";
import { locale } from "@store/i18n";
import { countdownContent } from "@store/translations/en.ts";
/** @jsxImportSource solid-js */
// V1.7
import { createSignal, onCleanup } from "solid-js";

const now = new Date();
const ngayQuocKhanh = new Date(now.getFullYear(), 9 - 1, 2); // September 2nd (Ngay Quoc Khanh)
const ngayThongNhat = new Date(now.getFullYear(), 4 - 1, 30); // April 30th (Ngay Thong Nhat)

const QKWikiEN = "https://en.wikipedia.org/wiki/Vietnam_National_Day";
const QKWikiVN = "https://vi.wikipedia.org/wiki/Ngày_Quốc_khánh_(Việt_Nam)";
const TNWikiEN = "https://en.wikipedia.org/wiki/Fall_of_Saigon";
const TNWikiVN = "https://vi.wikipedia.org/wiki/Sự_kiện_30_tháng_4_năm_1975";

function getCountdownValue() {
	const currentDate = Date.now();

	let targetDate = ngayThongNhat;
	if (currentDate >= targetDate) {
		targetDate = ngayQuocKhanh;
	}
	if (currentDate >= targetDate) {
		targetDate = ngayThongNhat;
		targetDate = new Date(targetDate.getFullYear() + 1, 4 - 1, 30);
	}

	const distance = targetDate - currentDate;
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	const countForDate = targetDate.getDate();
	return {
		seconds,
		minutes,
		hours,
		days,
		countForDate,
	};
}

const tcd = useStore(countdownContent);
const lang = useStore(locale);

const SolidCountdown = () => {
	const [countdownValue, setCountdownValue] = createSignal(getCountdownValue());

	onCleanup(() => {
		clearInterval(interval);
	});

	const interval = setInterval(() => {
		setCountdownValue(getCountdownValue());
	}, 1000);

	const wikiLink = () => {
		if (countdownValue().countForDate === 30) {
			if (lang() === "en") {
				return TNWikiEN;
			}
			return TNWikiVN;
		}
		if (lang() === "en") {
			return QKWikiEN;
		}
		return QKWikiVN;
	};

	return (
		<>
			<div class="flex h-screen items-center justify-center">
				<div class="card mx-5 shadow-2xl shadow-gray-400 drop-shadow-sm transition-shadow duration-1000 dark:shadow-orange-500  dark:backdrop-brightness-[0.7] lg:mx-0 ">
					<div class="grid grid-flow-row lg:grid-flow-col-dense">
						<figure class="max-w-xs md:mx-0 md:max-w-sm lg:max-w-xs">
							<img
								class="h-fit w-fit rounded-t-2xl object-cover lg:aspect-square lg:rounded-l-2xl lg:rounded-tr-none"
								src={
									countdownValue().countForDate === 30 ? gpflag.src : vnflag.src
								}
								alt="Viet Nam"
							/>
						</figure>

						<div class="m-3 items-center self-center text-center lg:mx-10">
							<div class="mb-2">
								<a
									class="group prose relative flex justify-center font-extrabold no-underline sm:prose-lg md:prose-2xl"
									href={wikiLink()}
									target="_blank"
									rel="noreferrer"
								>
									<span>
										{countdownValue().countForDate === 30
											? tcd().thongnhat
											: tcd().quockhanh}
									</span>
									<svg
										class="absolute right-0 top-0 hidden opacity-0 transition-opacity duration-200 group-hover:opacity-80 md:right-7 md:flex lg:-right-4 "
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
									>
										<title>Wiki</title>
										<path
											fill="currentColor"
											d="M3 1v12h12V1H3zm11 11H4V2h10v10zM2 14V3.5l-1-1V15h12.5l-1-1H2z"
										/>
										<path
											fill="currentColor"
											d="M5.5 4L8 6.5l-3 3L6.5 11l3-3l2.5 2.5V4z"
										/>
									</svg>
								</a>
							</div>
							<div class="grid auto-cols-min grid-flow-col justify-center gap-5 self-center text-center duration-0">
								<div class="flex flex-col">
									<span class="countdown justify-center font-mono text-4xl md:text-5xl">
										{countdownValue().days >= 100 ? (
											countdownValue().days
										) : (
											<span style={{ "--value": countdownValue().days }} />
										)}
									</span>
									<span>{tcd().day}</span>
								</div>
								<div class="flex flex-col">
									<span class="countdown justify-center font-mono text-4xl md:text-5xl">
										<span style={{ "--value": countdownValue().hours }} />
									</span>
									<span>{tcd().hour}</span>
								</div>
								<div class="flex flex-col">
									<span class="countdown justify-center font-mono text-4xl md:text-5xl">
										<span style={{ "--value": countdownValue().minutes }} />
									</span>
									<span>{tcd().min}</span>
								</div>
								<div class="flex flex-col">
									<span class="countdown justify-center font-mono text-4xl md:text-5xl">
										<span style={{ "--value": countdownValue().seconds }} />
									</span>
									<span>{tcd().sec}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SolidCountdown;
