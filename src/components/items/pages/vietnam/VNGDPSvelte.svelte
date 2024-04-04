<script>
import { dataset } from "@assets/json/vngdpdata.json";
import { GDPContent } from "@store/translations/en.ts";
import * as d3 from "d3";
import { onMount } from "svelte";

const year = Object.values(dataset.dimension.Năm.category.label)
	.map((value) => value.match(/\d{4}/))
	.filter((match) => match !== null)
	.map((match) => Number.parseInt(match[0]));
const value = dataset.value;
const rgdpData = year.map((year, index) => ({ year, value: value[index] }));
let gdpBox;
let titleh;
let srch;
let styles;
let p;
let th;
let sh;
let h;

onMount(() => {
	gdpBox = document.querySelector(".gdpbox");
	titleh = document.querySelector("#chartTitle");
	srch = document.querySelector("#srcInfo");
	styles = window.getComputedStyle(gdpBox);
	p = Number.parseFloat(styles.padding);
	th = titleh.offsetHeight;
	sh = srch.offsetHeight;
	h = gdpBox.offsetHeight - th * 3 - sh;

	const svg = d3
		.select("#chart")
		.select("svg")
		.attr("height", h + 2 * p);
	const w = svg.node().getBoundingClientRect().width - p * 5;

	const xScale = d3.scaleLinear(
		[d3.min(rgdpData, (d) => d.year), d3.max(rgdpData, (d) => d.year)],
		[0, w],
	);
	const yScale = d3.scaleLinear(
		[0, d3.max(rgdpData, (d) => Number(d.value.toFixed()) / 1000)],
		[h, 0],
	);

	svg
		.append("g")
		.call(d3.axisLeft(yScale))
		.attr("class", "y axis")
		.attr("transform", `translate(${p * 4},0)`);
	svg
		.append("g")
		.call(d3.axisLeft(yScale).tickSizeInner(-w))
		.attr("transform", `translate(${p * 4},0)`)
		.attr("class", "yGrid")
		.selectAll("g")
		.selectAll("text")
		.remove();
	svg
		.select(".yGrid")
		.selectAll("g")
		.selectAll("line")
		.attr("class", "stroke-gray-300");

	svg
		.selectAll("rect")
		.data(rgdpData)
		.join("rect")
		.attr(
			"class",
			"fill-lime-500 dark:fill-green-600 dark:hover:fill-lime-500 hover:fill-green-800 opacity-95",
		)
		.attr("width", w / rgdpData.length - 1.5)
		.attr("height", (d) => h)
		.attr("x", (d, i) => p * 4 + xScale(d.year) - w / rgdpData.length / 2)
		.attr("y", (d, i) => 0)
		.attr("data-date", (d, i) => d.year)
		.attr("data-gdp", (d, i) => d.value)
		.on("mouseover", (i, d) => {
			d3.select("#tooltip")
				.attr("data-date", d.year)
				.attr("data-gdp", d.value)
				.classed("hidden", false);
			d3.select("#tooltip")
				.select("#year")
				.text(`${$GDPContent.year}: ${d.year}`);
			d3.select("#tooltip")
				.select("#gdpValue")
				.text(
					`GDP: ${Number(d.value.toFixed(2)).toLocaleString()} ${
						$GDPContent.billion
					}`,
				);
		})
		.on("mouseout", () => {
			d3.select("body").select("#tooltip").classed("hidden", true);
		})
		.attr("mask", (d, i) => {
			const mask = svg.append("mask").attr("id", `mask-${i}`);
			mask
				.append("rect")
				.attr("width", w / rgdpData.length - 1.5)
				.attr("height", h - yScale(d.value / 1000))
				.attr("x", p * 4 + xScale(d.year) - w / rgdpData.length / 2)
				.attr("y", yScale(Number(d.value) / 1000))
				.attr("fill", "white");
			return `url(#mask-${i})`;
		});
	svg
		.append("g")
		.call(d3.axisBottom(xScale).tickFormat(d3.format("d")))
		.attr("transform", `translate(${p * 4},${h})`);
	svg.select("g").transition().duration(500);
	svg
		.selectAll("g")
		.selectAll("text")
		.attr("class", "text-black dark:text-white font-bold text-xs");
});
</script>

<!--
TO-DO:
 - Currency convert USD/VND with API
 - More detail on click
>-->
<div class="flex h-screen">
   <div
      class="gdpbox relative z-0 m-auto block h-[50%] w-11/12 justify-center overflow-hidden rounded-md border-4 border-red-950 bg-yellow-500 bg-opacity-10 p-3 shadow-xl md:h-[70%] md:w-9/12 lg:h-[80%] lg:w-8/12">
      <div id="chartTitle" class="mb-4 mt-2 text-center font-mono text-4xl font-bold">{$GDPContent.gdptitle}</div>
      <div
         id="tooltip"
         class="absolute ml-14 mt-2 hidden h-fit w-fit rounded-md border-2 border-gray-500 bg-white bg-opacity-75 p-2 px-2 font-mono text-sm font-extrabold dark:bg-opacity-90 dark:text-black md:ml-14 md:px-3 md:text-base lg:ml-16 lg:px-4 lg:text-lg">
         <div id="year"></div>
         <div id="gdpValue"></div>
      </div>
      <div id="chart" class="h-auto w-auto">
         <svg class="m-auto flex w-full"> </svg>
      </div>
      <div id="srcInfo" class="mt-2 flex items-end justify-between text-sm">
         <span class="text-xs text-yellow-900 dark:text-yellow-200">VNGDP - V2</span>
         <span>
            {$GDPContent.dsrc}:
            <a class="font-semibold underline" href="https://www.gso.gov.vn/" target="_blank">gso.gov.vn</a>
         </span>
      </div>
   </div>
</div>
