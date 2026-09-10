/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 114.0, "minX": 0.0, "maxY": 270.0, "series": [{"data": [[0.0, 114.0], [0.1, 117.0], [0.2, 120.0], [0.3, 124.0], [0.4, 127.0], [0.5, 127.0], [0.6, 128.0], [0.7, 131.0], [0.8, 135.0], [0.9, 137.0], [1.0, 138.0], [1.1, 140.0], [1.2, 140.0], [1.3, 141.0], [1.4, 141.0], [1.5, 141.0], [1.6, 142.0], [1.7, 142.0], [1.8, 143.0], [1.9, 145.0], [2.0, 145.0], [2.1, 146.0], [2.2, 147.0], [2.3, 147.0], [2.4, 148.0], [2.5, 148.0], [2.6, 149.0], [2.7, 149.0], [2.8, 150.0], [2.9, 150.0], [3.0, 151.0], [3.1, 151.0], [3.2, 151.0], [3.3, 152.0], [3.4, 152.0], [3.5, 152.0], [3.6, 152.0], [3.7, 153.0], [3.8, 153.0], [3.9, 153.0], [4.0, 153.0], [4.1, 154.0], [4.2, 154.0], [4.3, 154.0], [4.4, 154.0], [4.5, 154.0], [4.6, 154.0], [4.7, 155.0], [4.8, 155.0], [4.9, 155.0], [5.0, 155.0], [5.1, 155.0], [5.2, 156.0], [5.3, 156.0], [5.4, 156.0], [5.5, 156.0], [5.6, 156.0], [5.7, 156.0], [5.8, 156.0], [5.9, 156.0], [6.0, 156.0], [6.1, 157.0], [6.2, 157.0], [6.3, 157.0], [6.4, 157.0], [6.5, 157.0], [6.6, 157.0], [6.7, 157.0], [6.8, 157.0], [6.9, 158.0], [7.0, 158.0], [7.1, 158.0], [7.2, 158.0], [7.3, 158.0], [7.4, 158.0], [7.5, 158.0], [7.6, 158.0], [7.7, 158.0], [7.8, 159.0], [7.9, 159.0], [8.0, 159.0], [8.1, 159.0], [8.2, 159.0], [8.3, 159.0], [8.4, 159.0], [8.5, 159.0], [8.6, 159.0], [8.7, 160.0], [8.8, 160.0], [8.9, 160.0], [9.0, 160.0], [9.1, 160.0], [9.2, 160.0], [9.3, 160.0], [9.4, 160.0], [9.5, 160.0], [9.6, 160.0], [9.7, 160.0], [9.8, 160.0], [9.9, 160.0], [10.0, 160.0], [10.1, 160.0], [10.2, 160.0], [10.3, 161.0], [10.4, 161.0], [10.5, 161.0], [10.6, 161.0], [10.7, 161.0], [10.8, 161.0], [10.9, 161.0], [11.0, 161.0], [11.1, 161.0], [11.2, 161.0], [11.3, 161.0], [11.4, 161.0], [11.5, 161.0], [11.6, 161.0], [11.7, 161.0], [11.8, 161.0], [11.9, 161.0], [12.0, 161.0], [12.1, 161.0], [12.2, 162.0], [12.3, 162.0], [12.4, 162.0], [12.5, 162.0], [12.6, 162.0], [12.7, 162.0], [12.8, 162.0], [12.9, 162.0], [13.0, 162.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 162.0], [13.6, 162.0], [13.7, 162.0], [13.8, 162.0], [13.9, 163.0], [14.0, 163.0], [14.1, 163.0], [14.2, 163.0], [14.3, 163.0], [14.4, 163.0], [14.5, 163.0], [14.6, 163.0], [14.7, 163.0], [14.8, 163.0], [14.9, 163.0], [15.0, 163.0], [15.1, 163.0], [15.2, 163.0], [15.3, 163.0], [15.4, 163.0], [15.5, 163.0], [15.6, 163.0], [15.7, 163.0], [15.8, 163.0], [15.9, 163.0], [16.0, 163.0], [16.1, 164.0], [16.2, 164.0], [16.3, 164.0], [16.4, 164.0], [16.5, 164.0], [16.6, 164.0], [16.7, 164.0], [16.8, 164.0], [16.9, 164.0], [17.0, 164.0], [17.1, 164.0], [17.2, 164.0], [17.3, 164.0], [17.4, 164.0], [17.5, 164.0], [17.6, 164.0], [17.7, 164.0], [17.8, 164.0], [17.9, 165.0], [18.0, 165.0], [18.1, 165.0], [18.2, 165.0], [18.3, 165.0], [18.4, 165.0], [18.5, 165.0], [18.6, 165.0], [18.7, 165.0], [18.8, 165.0], [18.9, 165.0], [19.0, 165.0], [19.1, 165.0], [19.2, 165.0], [19.3, 165.0], [19.4, 165.0], [19.5, 165.0], [19.6, 165.0], [19.7, 165.0], [19.8, 165.0], [19.9, 165.0], [20.0, 165.0], [20.1, 165.0], [20.2, 165.0], [20.3, 165.0], [20.4, 165.0], [20.5, 166.0], [20.6, 166.0], [20.7, 166.0], [20.8, 166.0], [20.9, 166.0], [21.0, 166.0], [21.1, 166.0], [21.2, 166.0], [21.3, 166.0], [21.4, 166.0], [21.5, 166.0], [21.6, 166.0], [21.7, 166.0], [21.8, 166.0], [21.9, 166.0], [22.0, 166.0], [22.1, 166.0], [22.2, 166.0], [22.3, 166.0], [22.4, 166.0], [22.5, 166.0], [22.6, 166.0], [22.7, 166.0], [22.8, 166.0], [22.9, 166.0], [23.0, 166.0], [23.1, 166.0], [23.2, 166.0], [23.3, 166.0], [23.4, 166.0], [23.5, 167.0], [23.6, 167.0], [23.7, 167.0], [23.8, 167.0], [23.9, 167.0], [24.0, 167.0], [24.1, 167.0], [24.2, 167.0], [24.3, 167.0], [24.4, 167.0], [24.5, 167.0], [24.6, 167.0], [24.7, 167.0], [24.8, 167.0], [24.9, 167.0], [25.0, 167.0], [25.1, 167.0], [25.2, 167.0], [25.3, 167.0], [25.4, 167.0], [25.5, 167.0], [25.6, 167.0], [25.7, 167.0], [25.8, 167.0], [25.9, 167.0], [26.0, 167.0], [26.1, 167.0], [26.2, 167.0], [26.3, 168.0], [26.4, 168.0], [26.5, 168.0], [26.6, 168.0], [26.7, 168.0], [26.8, 168.0], [26.9, 168.0], [27.0, 168.0], [27.1, 168.0], [27.2, 168.0], [27.3, 168.0], [27.4, 168.0], [27.5, 168.0], [27.6, 168.0], [27.7, 168.0], [27.8, 168.0], [27.9, 168.0], [28.0, 168.0], [28.1, 168.0], [28.2, 168.0], [28.3, 168.0], [28.4, 168.0], [28.5, 168.0], [28.6, 168.0], [28.7, 168.0], [28.8, 168.0], [28.9, 168.0], [29.0, 168.0], [29.1, 168.0], [29.2, 168.0], [29.3, 168.0], [29.4, 169.0], [29.5, 169.0], [29.6, 169.0], [29.7, 169.0], [29.8, 169.0], [29.9, 169.0], [30.0, 169.0], [30.1, 169.0], [30.2, 169.0], [30.3, 169.0], [30.4, 169.0], [30.5, 169.0], [30.6, 169.0], [30.7, 169.0], [30.8, 169.0], [30.9, 169.0], [31.0, 169.0], [31.1, 169.0], [31.2, 169.0], [31.3, 169.0], [31.4, 169.0], [31.5, 169.0], [31.6, 169.0], [31.7, 169.0], [31.8, 169.0], [31.9, 169.0], [32.0, 169.0], [32.1, 169.0], [32.2, 169.0], [32.3, 169.0], [32.4, 169.0], [32.5, 169.0], [32.6, 170.0], [32.7, 170.0], [32.8, 170.0], [32.9, 170.0], [33.0, 170.0], [33.1, 170.0], [33.2, 170.0], [33.3, 170.0], [33.4, 170.0], [33.5, 170.0], [33.6, 170.0], [33.7, 170.0], [33.8, 170.0], [33.9, 170.0], [34.0, 170.0], [34.1, 170.0], [34.2, 170.0], [34.3, 170.0], [34.4, 170.0], [34.5, 170.0], [34.6, 170.0], [34.7, 170.0], [34.8, 170.0], [34.9, 170.0], [35.0, 170.0], [35.1, 170.0], [35.2, 170.0], [35.3, 170.0], [35.4, 170.0], [35.5, 170.0], [35.6, 170.0], [35.7, 170.0], [35.8, 170.0], [35.9, 170.0], [36.0, 170.0], [36.1, 171.0], [36.2, 171.0], [36.3, 171.0], [36.4, 171.0], [36.5, 171.0], [36.6, 171.0], [36.7, 171.0], [36.8, 171.0], [36.9, 171.0], [37.0, 171.0], [37.1, 171.0], [37.2, 171.0], [37.3, 171.0], [37.4, 171.0], [37.5, 171.0], [37.6, 171.0], [37.7, 171.0], [37.8, 171.0], [37.9, 171.0], [38.0, 171.0], [38.1, 171.0], [38.2, 171.0], [38.3, 171.0], [38.4, 171.0], [38.5, 171.0], [38.6, 171.0], [38.7, 171.0], [38.8, 171.0], [38.9, 171.0], [39.0, 171.0], [39.1, 171.0], [39.2, 172.0], [39.3, 172.0], [39.4, 172.0], [39.5, 172.0], [39.6, 172.0], [39.7, 172.0], [39.8, 172.0], [39.9, 172.0], [40.0, 172.0], [40.1, 172.0], [40.2, 172.0], [40.3, 172.0], [40.4, 172.0], [40.5, 172.0], [40.6, 172.0], [40.7, 172.0], [40.8, 172.0], [40.9, 172.0], [41.0, 172.0], [41.1, 172.0], [41.2, 172.0], [41.3, 172.0], [41.4, 172.0], [41.5, 172.0], [41.6, 172.0], [41.7, 172.0], [41.8, 172.0], [41.9, 172.0], [42.0, 172.0], [42.1, 172.0], [42.2, 172.0], [42.3, 172.0], [42.4, 172.0], [42.5, 172.0], [42.6, 172.0], [42.7, 173.0], [42.8, 173.0], [42.9, 173.0], [43.0, 173.0], [43.1, 173.0], [43.2, 173.0], [43.3, 173.0], [43.4, 173.0], [43.5, 173.0], [43.6, 173.0], [43.7, 173.0], [43.8, 173.0], [43.9, 173.0], [44.0, 173.0], [44.1, 173.0], [44.2, 173.0], [44.3, 173.0], [44.4, 173.0], [44.5, 173.0], [44.6, 173.0], [44.7, 173.0], [44.8, 173.0], [44.9, 173.0], [45.0, 173.0], [45.1, 173.0], [45.2, 173.0], [45.3, 173.0], [45.4, 173.0], [45.5, 173.0], [45.6, 173.0], [45.7, 173.0], [45.8, 173.0], [45.9, 173.0], [46.0, 173.0], [46.1, 173.0], [46.2, 173.0], [46.3, 173.0], [46.4, 173.0], [46.5, 173.0], [46.6, 174.0], [46.7, 174.0], [46.8, 174.0], [46.9, 174.0], [47.0, 174.0], [47.1, 174.0], [47.2, 174.0], [47.3, 174.0], [47.4, 174.0], [47.5, 174.0], [47.6, 174.0], [47.7, 174.0], [47.8, 174.0], [47.9, 174.0], [48.0, 174.0], [48.1, 174.0], [48.2, 174.0], [48.3, 174.0], [48.4, 174.0], [48.5, 174.0], [48.6, 174.0], [48.7, 174.0], [48.8, 174.0], [48.9, 174.0], [49.0, 174.0], [49.1, 174.0], [49.2, 174.0], [49.3, 174.0], [49.4, 174.0], [49.5, 174.0], [49.6, 174.0], [49.7, 174.0], [49.8, 175.0], [49.9, 175.0], [50.0, 175.0], [50.1, 175.0], [50.2, 175.0], [50.3, 175.0], [50.4, 175.0], [50.5, 175.0], [50.6, 175.0], [50.7, 175.0], [50.8, 175.0], [50.9, 175.0], [51.0, 175.0], [51.1, 175.0], [51.2, 175.0], [51.3, 175.0], [51.4, 175.0], [51.5, 175.0], [51.6, 175.0], [51.7, 175.0], [51.8, 175.0], [51.9, 175.0], [52.0, 175.0], [52.1, 175.0], [52.2, 175.0], [52.3, 175.0], [52.4, 175.0], [52.5, 175.0], [52.6, 175.0], [52.7, 175.0], [52.8, 175.0], [52.9, 175.0], [53.0, 175.0], [53.1, 175.0], [53.2, 175.0], [53.3, 176.0], [53.4, 176.0], [53.5, 176.0], [53.6, 176.0], [53.7, 176.0], [53.8, 176.0], [53.9, 176.0], [54.0, 176.0], [54.1, 176.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 176.0], [54.7, 176.0], [54.8, 176.0], [54.9, 176.0], [55.0, 176.0], [55.1, 176.0], [55.2, 176.0], [55.3, 176.0], [55.4, 176.0], [55.5, 176.0], [55.6, 176.0], [55.7, 176.0], [55.8, 176.0], [55.9, 176.0], [56.0, 176.0], [56.1, 176.0], [56.2, 176.0], [56.3, 176.0], [56.4, 176.0], [56.5, 176.0], [56.6, 176.0], [56.7, 177.0], [56.8, 177.0], [56.9, 177.0], [57.0, 177.0], [57.1, 177.0], [57.2, 177.0], [57.3, 177.0], [57.4, 177.0], [57.5, 177.0], [57.6, 177.0], [57.7, 177.0], [57.8, 177.0], [57.9, 177.0], [58.0, 177.0], [58.1, 177.0], [58.2, 177.0], [58.3, 177.0], [58.4, 177.0], [58.5, 177.0], [58.6, 177.0], [58.7, 177.0], [58.8, 177.0], [58.9, 178.0], [59.0, 178.0], [59.1, 178.0], [59.2, 178.0], [59.3, 178.0], [59.4, 178.0], [59.5, 178.0], [59.6, 178.0], [59.7, 178.0], [59.8, 178.0], [59.9, 178.0], [60.0, 178.0], [60.1, 178.0], [60.2, 178.0], [60.3, 178.0], [60.4, 178.0], [60.5, 178.0], [60.6, 178.0], [60.7, 178.0], [60.8, 178.0], [60.9, 178.0], [61.0, 178.0], [61.1, 178.0], [61.2, 178.0], [61.3, 178.0], [61.4, 178.0], [61.5, 178.0], [61.6, 178.0], [61.7, 179.0], [61.8, 179.0], [61.9, 179.0], [62.0, 179.0], [62.1, 179.0], [62.2, 179.0], [62.3, 179.0], [62.4, 179.0], [62.5, 179.0], [62.6, 179.0], [62.7, 179.0], [62.8, 179.0], [62.9, 179.0], [63.0, 179.0], [63.1, 179.0], [63.2, 179.0], [63.3, 179.0], [63.4, 179.0], [63.5, 179.0], [63.6, 179.0], [63.7, 179.0], [63.8, 179.0], [63.9, 179.0], [64.0, 179.0], [64.1, 179.0], [64.2, 179.0], [64.3, 179.0], [64.4, 179.0], [64.5, 179.0], [64.6, 180.0], [64.7, 180.0], [64.8, 180.0], [64.9, 180.0], [65.0, 180.0], [65.1, 180.0], [65.2, 180.0], [65.3, 180.0], [65.4, 180.0], [65.5, 180.0], [65.6, 180.0], [65.7, 180.0], [65.8, 180.0], [65.9, 180.0], [66.0, 180.0], [66.1, 180.0], [66.2, 180.0], [66.3, 180.0], [66.4, 180.0], [66.5, 180.0], [66.6, 180.0], [66.7, 180.0], [66.8, 180.0], [66.9, 180.0], [67.0, 180.0], [67.1, 181.0], [67.2, 181.0], [67.3, 181.0], [67.4, 181.0], [67.5, 181.0], [67.6, 181.0], [67.7, 181.0], [67.8, 181.0], [67.9, 181.0], [68.0, 181.0], [68.1, 181.0], [68.2, 181.0], [68.3, 181.0], [68.4, 181.0], [68.5, 181.0], [68.6, 181.0], [68.7, 181.0], [68.8, 181.0], [68.9, 181.0], [69.0, 181.0], [69.1, 181.0], [69.2, 181.0], [69.3, 181.0], [69.4, 181.0], [69.5, 181.0], [69.6, 181.0], [69.7, 181.0], [69.8, 181.0], [69.9, 181.0], [70.0, 181.0], [70.1, 181.0], [70.2, 181.0], [70.3, 182.0], [70.4, 182.0], [70.5, 182.0], [70.6, 182.0], [70.7, 182.0], [70.8, 182.0], [70.9, 182.0], [71.0, 182.0], [71.1, 182.0], [71.2, 182.0], [71.3, 182.0], [71.4, 182.0], [71.5, 182.0], [71.6, 182.0], [71.7, 182.0], [71.8, 182.0], [71.9, 182.0], [72.0, 182.0], [72.1, 182.0], [72.2, 182.0], [72.3, 182.0], [72.4, 182.0], [72.5, 182.0], [72.6, 182.0], [72.7, 183.0], [72.8, 183.0], [72.9, 183.0], [73.0, 183.0], [73.1, 183.0], [73.2, 183.0], [73.3, 183.0], [73.4, 183.0], [73.5, 183.0], [73.6, 183.0], [73.7, 183.0], [73.8, 183.0], [73.9, 183.0], [74.0, 183.0], [74.1, 183.0], [74.2, 183.0], [74.3, 183.0], [74.4, 183.0], [74.5, 183.0], [74.6, 184.0], [74.7, 184.0], [74.8, 184.0], [74.9, 184.0], [75.0, 184.0], [75.1, 184.0], [75.2, 184.0], [75.3, 184.0], [75.4, 184.0], [75.5, 184.0], [75.6, 184.0], [75.7, 184.0], [75.8, 184.0], [75.9, 184.0], [76.0, 184.0], [76.1, 184.0], [76.2, 184.0], [76.3, 184.0], [76.4, 184.0], [76.5, 184.0], [76.6, 184.0], [76.7, 184.0], [76.8, 185.0], [76.9, 185.0], [77.0, 185.0], [77.1, 185.0], [77.2, 185.0], [77.3, 185.0], [77.4, 185.0], [77.5, 185.0], [77.6, 185.0], [77.7, 185.0], [77.8, 185.0], [77.9, 185.0], [78.0, 185.0], [78.1, 185.0], [78.2, 185.0], [78.3, 185.0], [78.4, 185.0], [78.5, 185.0], [78.6, 185.0], [78.7, 185.0], [78.8, 186.0], [78.9, 186.0], [79.0, 186.0], [79.1, 186.0], [79.2, 186.0], [79.3, 186.0], [79.4, 186.0], [79.5, 186.0], [79.6, 186.0], [79.7, 186.0], [79.8, 186.0], [79.9, 186.0], [80.0, 186.0], [80.1, 186.0], [80.2, 186.0], [80.3, 186.0], [80.4, 187.0], [80.5, 187.0], [80.6, 187.0], [80.7, 187.0], [80.8, 187.0], [80.9, 187.0], [81.0, 187.0], [81.1, 187.0], [81.2, 187.0], [81.3, 187.0], [81.4, 187.0], [81.5, 187.0], [81.6, 187.0], [81.7, 187.0], [81.8, 187.0], [81.9, 187.0], [82.0, 188.0], [82.1, 188.0], [82.2, 188.0], [82.3, 188.0], [82.4, 188.0], [82.5, 188.0], [82.6, 188.0], [82.7, 188.0], [82.8, 188.0], [82.9, 188.0], [83.0, 188.0], [83.1, 188.0], [83.2, 188.0], [83.3, 189.0], [83.4, 189.0], [83.5, 189.0], [83.6, 189.0], [83.7, 189.0], [83.8, 189.0], [83.9, 189.0], [84.0, 189.0], [84.1, 189.0], [84.2, 189.0], [84.3, 189.0], [84.4, 189.0], [84.5, 190.0], [84.6, 190.0], [84.7, 190.0], [84.8, 190.0], [84.9, 190.0], [85.0, 190.0], [85.1, 190.0], [85.2, 190.0], [85.3, 190.0], [85.4, 190.0], [85.5, 190.0], [85.6, 191.0], [85.7, 191.0], [85.8, 191.0], [85.9, 191.0], [86.0, 191.0], [86.1, 191.0], [86.2, 191.0], [86.3, 191.0], [86.4, 191.0], [86.5, 191.0], [86.6, 191.0], [86.7, 192.0], [86.8, 192.0], [86.9, 192.0], [87.0, 192.0], [87.1, 192.0], [87.2, 192.0], [87.3, 192.0], [87.4, 192.0], [87.5, 192.0], [87.6, 192.0], [87.7, 193.0], [87.8, 193.0], [87.9, 193.0], [88.0, 193.0], [88.1, 193.0], [88.2, 193.0], [88.3, 193.0], [88.4, 193.0], [88.5, 194.0], [88.6, 194.0], [88.7, 194.0], [88.8, 194.0], [88.9, 194.0], [89.0, 194.0], [89.1, 194.0], [89.2, 194.0], [89.3, 194.0], [89.4, 195.0], [89.5, 195.0], [89.6, 195.0], [89.7, 195.0], [89.8, 195.0], [89.9, 195.0], [90.0, 196.0], [90.1, 196.0], [90.2, 196.0], [90.3, 196.0], [90.4, 196.0], [90.5, 196.0], [90.6, 197.0], [90.7, 197.0], [90.8, 197.0], [90.9, 197.0], [91.0, 197.0], [91.1, 197.0], [91.2, 197.0], [91.3, 198.0], [91.4, 198.0], [91.5, 198.0], [91.6, 198.0], [91.7, 199.0], [91.8, 199.0], [91.9, 199.0], [92.0, 199.0], [92.1, 199.0], [92.2, 199.0], [92.3, 199.0], [92.4, 200.0], [92.5, 200.0], [92.6, 200.0], [92.7, 200.0], [92.8, 200.0], [92.9, 200.0], [93.0, 201.0], [93.1, 201.0], [93.2, 201.0], [93.3, 201.0], [93.4, 201.0], [93.5, 202.0], [93.6, 202.0], [93.7, 202.0], [93.8, 202.0], [93.9, 203.0], [94.0, 203.0], [94.1, 204.0], [94.2, 204.0], [94.3, 204.0], [94.4, 205.0], [94.5, 205.0], [94.6, 205.0], [94.7, 206.0], [94.8, 206.0], [94.9, 206.0], [95.0, 206.0], [95.1, 207.0], [95.2, 207.0], [95.3, 207.0], [95.4, 208.0], [95.5, 208.0], [95.6, 208.0], [95.7, 209.0], [95.8, 209.0], [95.9, 209.0], [96.0, 210.0], [96.1, 210.0], [96.2, 211.0], [96.3, 211.0], [96.4, 212.0], [96.5, 212.0], [96.6, 212.0], [96.7, 213.0], [96.8, 213.0], [96.9, 213.0], [97.0, 214.0], [97.1, 214.0], [97.2, 214.0], [97.3, 215.0], [97.4, 215.0], [97.5, 216.0], [97.6, 216.0], [97.7, 216.0], [97.8, 217.0], [97.9, 217.0], [98.0, 218.0], [98.1, 218.0], [98.2, 219.0], [98.3, 220.0], [98.4, 220.0], [98.5, 221.0], [98.6, 221.0], [98.7, 222.0], [98.8, 223.0], [98.9, 224.0], [99.0, 226.0], [99.1, 227.0], [99.2, 228.0], [99.3, 231.0], [99.4, 233.0], [99.5, 238.0], [99.6, 240.0], [99.7, 244.0], [99.8, 248.0], [99.9, 256.0], [100.0, 270.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 252.0, "minX": 100.0, "maxY": 3022.0, "series": [{"data": [[100.0, 3022.0], [200.0, 252.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3274.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3274.0, "series": [{"data": [[0.0, 3274.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.898809523809534, "minX": 1.78900242E12, "maxY": 9.984115523465704, "series": [{"data": [[1.78900242E12, 8.898809523809534], [1.78900248E12, 9.984115523465704]], "isOverall": false, "label": "Cenario 1 - Listar Comandas (GET, leitura pesada)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900248E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 119.875, "minX": 1.0, "maxY": 177.73974358974402, "series": [{"data": [[1.0, 129.0], [2.0, 119.875], [4.0, 138.46666666666667], [8.0, 159.64000000000001], [9.0, 171.28571428571428], [5.0, 145.7222222222222], [10.0, 177.73974358974402], [3.0, 130.6923076923077], [6.0, 147.0952380952381], [7.0, 149.68181818181816]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}, {"data": [[9.817043372021976, 176.41753207086106]], "isOverall": false, "label": "GET /comanda/api/comandas-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1142.4, "minX": 1.78900242E12, "maxY": 5770198.75, "series": [{"data": [[1.78900242E12, 1049879.3], [1.78900248E12, 5770198.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78900242E12, 1142.4], [1.78900248E12, 6278.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900248E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 171.10317460317464, "minX": 1.78900242E12, "maxY": 177.38447653429603, "series": [{"data": [[1.78900242E12, 171.10317460317464], [1.78900248E12, 177.38447653429603]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900248E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 35.303571428571374, "minX": 1.78900242E12, "maxY": 36.098194945848356, "series": [{"data": [[1.78900242E12, 35.303571428571374], [1.78900248E12, 36.098194945848356]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900248E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78900242E12, "maxY": 0.05952380952380953, "series": [{"data": [[1.78900242E12, 0.05952380952380953], [1.78900248E12, 0.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900248E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 114.0, "minX": 1.78900242E12, "maxY": 270.0, "series": [{"data": [[1.78900242E12, 256.0], [1.78900248E12, 270.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78900242E12, 114.0], [1.78900248E12, 142.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78900242E12, 198.0], [1.78900248E12, 195.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78900242E12, 240.95], [1.78900248E12, 224.28999999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78900242E12, 172.0], [1.78900248E12, 175.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78900242E12, 209.0], [1.78900248E12, 205.44999999999982]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900248E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 120.0, "minX": 10.0, "maxY": 188.0, "series": [{"data": [[37.0, 143.0], [10.0, 120.0], [44.0, 151.0], [49.0, 183.0], [51.0, 188.0], [50.0, 183.0], [52.0, 181.0], [53.0, 174.0], [55.0, 178.0], [54.0, 177.5], [57.0, 175.0], [56.0, 174.0], [58.0, 174.0], [59.0, 171.0], [60.0, 171.0], [15.0, 170.0], [26.0, 130.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 25.0, "minX": 10.0, "maxY": 38.5, "series": [{"data": [[37.0, 30.0], [10.0, 25.0], [44.0, 31.5], [49.0, 37.0], [51.0, 36.0], [50.0, 38.5], [52.0, 36.0], [53.0, 35.0], [55.0, 36.0], [54.0, 35.0], [57.0, 36.0], [56.0, 35.0], [58.0, 35.0], [59.0, 34.0], [60.0, 35.0], [15.0, 35.0], [26.0, 26.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.566666666666666, "minX": 1.78900242E12, "maxY": 46.0, "series": [{"data": [[1.78900242E12, 8.566666666666666], [1.78900248E12, 46.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900248E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.4, "minX": 1.78900242E12, "maxY": 46.166666666666664, "series": [{"data": [[1.78900242E12, 8.4], [1.78900248E12, 46.166666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900248E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.4, "minX": 1.78900242E12, "maxY": 46.166666666666664, "series": [{"data": [[1.78900242E12, 8.4], [1.78900248E12, 46.166666666666664]], "isOverall": false, "label": "GET /comanda/api/comandas-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900248E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.4, "minX": 1.78900242E12, "maxY": 46.166666666666664, "series": [{"data": [[1.78900242E12, 8.4], [1.78900248E12, 46.166666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900248E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

