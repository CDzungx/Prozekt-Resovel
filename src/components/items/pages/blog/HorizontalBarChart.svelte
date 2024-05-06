<script>
export let chartTitle;
export let dataArr;
export let arrName;
export let chartNote;
import * as d3 from "d3";
import { onMount } from "svelte";

let chartBox;
let boxHeight = 300;
let boxWidth = 300;
let titleHeight = 40;
let descHeight = 20;
let chartHeight = 100;
let chartWidth = 100;
let padding = 10;
let styles;
let gx;
let gy;
let gxi;

onMount(() => {
	chartBox = document.querySelector(".chartBox");
	boxHeight = chartBox.clientHeight;
	boxWidth = chartBox.offsetWidth;
	descHeight = document.querySelector(".desc").clientHeight;
	titleHeight = document.querySelector("#chartTitle").clientHeight;
	styles = window.getComputedStyle(chartBox);
	padding = Number.parseFloat(styles.padding);
	chartHeight = boxHeight - titleHeight - descHeight - padding * 4;
	chartWidth = boxWidth - padding * 4;
	const svg = d3.select("#chart").select("svg");
	const xScale = d3.scaleLinear([0, d3.max(dataArr, (d) => d)], [0, chartWidth - padding * 2]);
	const yScale = d3.scaleLinear().range([0, chartHeight - padding * 2]);
	d3.select(gxi)
		.call(d3.axisBottom(xScale).tickSizeInner(-chartHeight + padding * 2))
		.selectAll("g")
		.selectAll("text")
		.remove();
	d3.select(gxi).selectAll("line").attr("class", "stroke-gray-300 dark:opacity-50");
	d3.select(gx).call(d3.axisBottom(xScale).ticks(6));
	d3.select(gy).call(d3.axisLeft(yScale).ticks(0));
});
$: x = d3.scaleLinear([0, d3.max(dataArr, (d) => d)], [0, chartWidth - padding * 2]);
</script>

<div
   class="chartBox relative h-72 w-full rounded-md border-2 border-gray-800 bg-base-200 p-3 transition-colors duration-200 md:h-72 md:w-[24rem] lg:h-80 lg:w-[45rem]">
   <div id="chartTitle" class="mb-7 mt-2 text-center font-serif text-3xl font-extrabold">
      {chartTitle}
   </div>
   <div id="chart">
      <svg class="m-auto flex" height={chartHeight} width={chartWidth}>
         <g bind:this={gxi} transform="translate({padding},{chartHeight - padding * 2})" />
         <g bind:this={gx} transform="translate({padding},{chartHeight - padding * 2})" />
         <g bind:this={gy} transform="translate({padding},0)" />
         {#each dataArr as d, i}
            <g>
               <rect
                  x={padding}
                  y={(chartHeight / (dataArr.length + 0.5)) * i}
                  width={x(d)}
                  height={((chartHeight / dataArr.length) * 2) / 3}
                  class="fill-lime-800 opacity-95 dark:fill-green-700" />
               <text
                  x={padding * 2}
                  y={(chartHeight / (dataArr.length + 0.5)) * i + ((chartHeight / dataArr.length) * 2) / 3 - padding}
                  class="fill-white text-base font-semibold md:text-lg">
                  {arrName[i]}: {d}
               </text>
            </g>
         {/each}
      </svg>
   </div>
   <div class="desc flex justify-end text-sm opacity-70">
      <span>*{chartNote}</span>
   </div>
</div>
