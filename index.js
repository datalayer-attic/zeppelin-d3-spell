/*
 * Copyright 2017 Datalayer (http://datalayer.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  SpellBase,
  SpellResult,
  DefaultDisplayType,
} from 'zeppelin-spell';

import * as d3 from 'd3'
import {event as currentEvent} from 'd3'

export default class D3Spell extends SpellBase {
  constructor() {
    super("%d3");
  }

  interpret(paragraphText) {

    const callback = (elemId => {

      const container = document.getElementById(elemId)
      container.style.width = "1500px";
      container.style.height = "1000px";

      d3.select("#" + elemId).append("div").html(paragraphText)
/*
      var d3Svg = d3.select("#" + elemId)
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);

      d3Svg.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50)
        .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
        .on("mouseout", function(){d3.select(this).style("fill", "white");});
*/
    })

    return new SpellResult(callback);

 }

}
