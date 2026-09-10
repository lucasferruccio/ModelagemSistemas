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
        data: {"result": {"minY": 120.0, "minX": 0.0, "maxY": 723.0, "series": [{"data": [[0.0, 120.0], [0.1, 132.0], [0.2, 167.0], [0.3, 182.0], [0.4, 188.0], [0.5, 191.0], [0.6, 194.0], [0.7, 197.0], [0.8, 200.0], [0.9, 201.0], [1.0, 203.0], [1.1, 206.0], [1.2, 207.0], [1.3, 209.0], [1.4, 213.0], [1.5, 215.0], [1.6, 219.0], [1.7, 223.0], [1.8, 228.0], [1.9, 232.0], [2.0, 238.0], [2.1, 240.0], [2.2, 243.0], [2.3, 247.0], [2.4, 255.0], [2.5, 261.0], [2.6, 265.0], [2.7, 269.0], [2.8, 270.0], [2.9, 272.0], [3.0, 284.0], [3.1, 288.0], [3.2, 299.0], [3.3, 302.0], [3.4, 304.0], [3.5, 306.0], [3.6, 310.0], [3.7, 314.0], [3.8, 316.0], [3.9, 325.0], [4.0, 334.0], [4.1, 342.0], [4.2, 344.0], [4.3, 346.0], [4.4, 347.0], [4.5, 353.0], [4.6, 354.0], [4.7, 355.0], [4.8, 356.0], [4.9, 357.0], [5.0, 357.0], [5.1, 358.0], [5.2, 358.0], [5.3, 360.0], [5.4, 361.0], [5.5, 362.0], [5.6, 363.0], [5.7, 363.0], [5.8, 365.0], [5.9, 365.0], [6.0, 365.0], [6.1, 366.0], [6.2, 367.0], [6.3, 368.0], [6.4, 369.0], [6.5, 369.0], [6.6, 370.0], [6.7, 370.0], [6.8, 371.0], [6.9, 372.0], [7.0, 372.0], [7.1, 373.0], [7.2, 374.0], [7.3, 374.0], [7.4, 374.0], [7.5, 375.0], [7.6, 375.0], [7.7, 375.0], [7.8, 375.0], [7.9, 376.0], [8.0, 376.0], [8.1, 376.0], [8.2, 376.0], [8.3, 377.0], [8.4, 377.0], [8.5, 377.0], [8.6, 378.0], [8.7, 378.0], [8.8, 379.0], [8.9, 379.0], [9.0, 379.0], [9.1, 380.0], [9.2, 380.0], [9.3, 380.0], [9.4, 380.0], [9.5, 381.0], [9.6, 381.0], [9.7, 381.0], [9.8, 381.0], [9.9, 382.0], [10.0, 382.0], [10.1, 383.0], [10.2, 383.0], [10.3, 383.0], [10.4, 384.0], [10.5, 384.0], [10.6, 384.0], [10.7, 385.0], [10.8, 385.0], [10.9, 385.0], [11.0, 385.0], [11.1, 385.0], [11.2, 386.0], [11.3, 386.0], [11.4, 386.0], [11.5, 386.0], [11.6, 387.0], [11.7, 387.0], [11.8, 387.0], [11.9, 387.0], [12.0, 387.0], [12.1, 388.0], [12.2, 388.0], [12.3, 388.0], [12.4, 388.0], [12.5, 388.0], [12.6, 389.0], [12.7, 389.0], [12.8, 389.0], [12.9, 389.0], [13.0, 390.0], [13.1, 390.0], [13.2, 390.0], [13.3, 390.0], [13.4, 390.0], [13.5, 391.0], [13.6, 391.0], [13.7, 391.0], [13.8, 391.0], [13.9, 391.0], [14.0, 392.0], [14.1, 392.0], [14.2, 392.0], [14.3, 392.0], [14.4, 392.0], [14.5, 393.0], [14.6, 393.0], [14.7, 393.0], [14.8, 393.0], [14.9, 394.0], [15.0, 394.0], [15.1, 394.0], [15.2, 394.0], [15.3, 394.0], [15.4, 394.0], [15.5, 395.0], [15.6, 395.0], [15.7, 395.0], [15.8, 395.0], [15.9, 395.0], [16.0, 395.0], [16.1, 396.0], [16.2, 396.0], [16.3, 396.0], [16.4, 396.0], [16.5, 396.0], [16.6, 397.0], [16.7, 397.0], [16.8, 397.0], [16.9, 397.0], [17.0, 397.0], [17.1, 397.0], [17.2, 397.0], [17.3, 397.0], [17.4, 398.0], [17.5, 398.0], [17.6, 398.0], [17.7, 398.0], [17.8, 398.0], [17.9, 398.0], [18.0, 398.0], [18.1, 398.0], [18.2, 398.0], [18.3, 399.0], [18.4, 399.0], [18.5, 399.0], [18.6, 399.0], [18.7, 399.0], [18.8, 399.0], [18.9, 400.0], [19.0, 400.0], [19.1, 400.0], [19.2, 400.0], [19.3, 400.0], [19.4, 400.0], [19.5, 400.0], [19.6, 401.0], [19.7, 401.0], [19.8, 401.0], [19.9, 401.0], [20.0, 401.0], [20.1, 401.0], [20.2, 401.0], [20.3, 401.0], [20.4, 401.0], [20.5, 401.0], [20.6, 401.0], [20.7, 402.0], [20.8, 402.0], [20.9, 402.0], [21.0, 402.0], [21.1, 402.0], [21.2, 402.0], [21.3, 402.0], [21.4, 402.0], [21.5, 402.0], [21.6, 402.0], [21.7, 402.0], [21.8, 403.0], [21.9, 403.0], [22.0, 403.0], [22.1, 403.0], [22.2, 403.0], [22.3, 403.0], [22.4, 403.0], [22.5, 403.0], [22.6, 403.0], [22.7, 404.0], [22.8, 404.0], [22.9, 404.0], [23.0, 404.0], [23.1, 404.0], [23.2, 404.0], [23.3, 404.0], [23.4, 404.0], [23.5, 405.0], [23.6, 405.0], [23.7, 405.0], [23.8, 405.0], [23.9, 405.0], [24.0, 405.0], [24.1, 405.0], [24.2, 406.0], [24.3, 406.0], [24.4, 406.0], [24.5, 406.0], [24.6, 406.0], [24.7, 406.0], [24.8, 406.0], [24.9, 406.0], [25.0, 406.0], [25.1, 406.0], [25.2, 407.0], [25.3, 407.0], [25.4, 407.0], [25.5, 407.0], [25.6, 407.0], [25.7, 407.0], [25.8, 407.0], [25.9, 407.0], [26.0, 407.0], [26.1, 408.0], [26.2, 408.0], [26.3, 408.0], [26.4, 408.0], [26.5, 408.0], [26.6, 408.0], [26.7, 408.0], [26.8, 408.0], [26.9, 408.0], [27.0, 408.0], [27.1, 409.0], [27.2, 409.0], [27.3, 409.0], [27.4, 409.0], [27.5, 409.0], [27.6, 409.0], [27.7, 409.0], [27.8, 409.0], [27.9, 409.0], [28.0, 410.0], [28.1, 410.0], [28.2, 410.0], [28.3, 410.0], [28.4, 410.0], [28.5, 410.0], [28.6, 410.0], [28.7, 410.0], [28.8, 410.0], [28.9, 410.0], [29.0, 410.0], [29.1, 411.0], [29.2, 411.0], [29.3, 411.0], [29.4, 411.0], [29.5, 411.0], [29.6, 411.0], [29.7, 411.0], [29.8, 411.0], [29.9, 411.0], [30.0, 412.0], [30.1, 412.0], [30.2, 412.0], [30.3, 412.0], [30.4, 412.0], [30.5, 412.0], [30.6, 412.0], [30.7, 412.0], [30.8, 412.0], [30.9, 412.0], [31.0, 412.0], [31.1, 413.0], [31.2, 413.0], [31.3, 413.0], [31.4, 413.0], [31.5, 413.0], [31.6, 413.0], [31.7, 413.0], [31.8, 413.0], [31.9, 414.0], [32.0, 414.0], [32.1, 414.0], [32.2, 414.0], [32.3, 414.0], [32.4, 414.0], [32.5, 414.0], [32.6, 414.0], [32.7, 414.0], [32.8, 415.0], [32.9, 415.0], [33.0, 415.0], [33.1, 415.0], [33.2, 415.0], [33.3, 415.0], [33.4, 415.0], [33.5, 415.0], [33.6, 416.0], [33.7, 416.0], [33.8, 416.0], [33.9, 416.0], [34.0, 416.0], [34.1, 416.0], [34.2, 416.0], [34.3, 416.0], [34.4, 416.0], [34.5, 416.0], [34.6, 417.0], [34.7, 417.0], [34.8, 417.0], [34.9, 417.0], [35.0, 417.0], [35.1, 417.0], [35.2, 417.0], [35.3, 417.0], [35.4, 418.0], [35.5, 418.0], [35.6, 418.0], [35.7, 418.0], [35.8, 418.0], [35.9, 418.0], [36.0, 418.0], [36.1, 418.0], [36.2, 418.0], [36.3, 419.0], [36.4, 419.0], [36.5, 419.0], [36.6, 419.0], [36.7, 419.0], [36.8, 419.0], [36.9, 419.0], [37.0, 419.0], [37.1, 419.0], [37.2, 419.0], [37.3, 419.0], [37.4, 419.0], [37.5, 419.0], [37.6, 419.0], [37.7, 420.0], [37.8, 420.0], [37.9, 420.0], [38.0, 420.0], [38.1, 420.0], [38.2, 420.0], [38.3, 420.0], [38.4, 420.0], [38.5, 420.0], [38.6, 420.0], [38.7, 420.0], [38.8, 421.0], [38.9, 421.0], [39.0, 421.0], [39.1, 421.0], [39.2, 421.0], [39.3, 421.0], [39.4, 421.0], [39.5, 421.0], [39.6, 421.0], [39.7, 422.0], [39.8, 422.0], [39.9, 422.0], [40.0, 422.0], [40.1, 422.0], [40.2, 422.0], [40.3, 422.0], [40.4, 422.0], [40.5, 422.0], [40.6, 422.0], [40.7, 422.0], [40.8, 423.0], [40.9, 423.0], [41.0, 423.0], [41.1, 423.0], [41.2, 423.0], [41.3, 423.0], [41.4, 423.0], [41.5, 423.0], [41.6, 423.0], [41.7, 423.0], [41.8, 423.0], [41.9, 424.0], [42.0, 424.0], [42.1, 424.0], [42.2, 424.0], [42.3, 424.0], [42.4, 424.0], [42.5, 424.0], [42.6, 424.0], [42.7, 424.0], [42.8, 424.0], [42.9, 424.0], [43.0, 425.0], [43.1, 425.0], [43.2, 425.0], [43.3, 425.0], [43.4, 425.0], [43.5, 425.0], [43.6, 425.0], [43.7, 425.0], [43.8, 425.0], [43.9, 425.0], [44.0, 425.0], [44.1, 425.0], [44.2, 426.0], [44.3, 426.0], [44.4, 426.0], [44.5, 426.0], [44.6, 426.0], [44.7, 426.0], [44.8, 426.0], [44.9, 426.0], [45.0, 426.0], [45.1, 426.0], [45.2, 426.0], [45.3, 426.0], [45.4, 426.0], [45.5, 427.0], [45.6, 427.0], [45.7, 427.0], [45.8, 427.0], [45.9, 427.0], [46.0, 427.0], [46.1, 427.0], [46.2, 427.0], [46.3, 427.0], [46.4, 427.0], [46.5, 427.0], [46.6, 428.0], [46.7, 428.0], [46.8, 428.0], [46.9, 428.0], [47.0, 428.0], [47.1, 428.0], [47.2, 428.0], [47.3, 428.0], [47.4, 429.0], [47.5, 429.0], [47.6, 429.0], [47.7, 429.0], [47.8, 429.0], [47.9, 429.0], [48.0, 429.0], [48.1, 429.0], [48.2, 429.0], [48.3, 429.0], [48.4, 430.0], [48.5, 430.0], [48.6, 430.0], [48.7, 430.0], [48.8, 430.0], [48.9, 430.0], [49.0, 430.0], [49.1, 430.0], [49.2, 430.0], [49.3, 431.0], [49.4, 431.0], [49.5, 431.0], [49.6, 431.0], [49.7, 431.0], [49.8, 431.0], [49.9, 431.0], [50.0, 431.0], [50.1, 431.0], [50.2, 431.0], [50.3, 432.0], [50.4, 432.0], [50.5, 432.0], [50.6, 432.0], [50.7, 432.0], [50.8, 432.0], [50.9, 432.0], [51.0, 432.0], [51.1, 433.0], [51.2, 433.0], [51.3, 433.0], [51.4, 433.0], [51.5, 433.0], [51.6, 433.0], [51.7, 433.0], [51.8, 433.0], [51.9, 433.0], [52.0, 433.0], [52.1, 433.0], [52.2, 433.0], [52.3, 433.0], [52.4, 434.0], [52.5, 434.0], [52.6, 434.0], [52.7, 434.0], [52.8, 434.0], [52.9, 434.0], [53.0, 434.0], [53.1, 434.0], [53.2, 434.0], [53.3, 434.0], [53.4, 434.0], [53.5, 435.0], [53.6, 435.0], [53.7, 435.0], [53.8, 435.0], [53.9, 435.0], [54.0, 435.0], [54.1, 435.0], [54.2, 435.0], [54.3, 435.0], [54.4, 436.0], [54.5, 436.0], [54.6, 436.0], [54.7, 436.0], [54.8, 436.0], [54.9, 436.0], [55.0, 436.0], [55.1, 436.0], [55.2, 436.0], [55.3, 436.0], [55.4, 436.0], [55.5, 437.0], [55.6, 437.0], [55.7, 437.0], [55.8, 437.0], [55.9, 437.0], [56.0, 437.0], [56.1, 437.0], [56.2, 437.0], [56.3, 437.0], [56.4, 438.0], [56.5, 438.0], [56.6, 438.0], [56.7, 438.0], [56.8, 438.0], [56.9, 438.0], [57.0, 438.0], [57.1, 438.0], [57.2, 438.0], [57.3, 439.0], [57.4, 439.0], [57.5, 439.0], [57.6, 439.0], [57.7, 439.0], [57.8, 439.0], [57.9, 439.0], [58.0, 439.0], [58.1, 439.0], [58.2, 439.0], [58.3, 440.0], [58.4, 440.0], [58.5, 440.0], [58.6, 440.0], [58.7, 440.0], [58.8, 440.0], [58.9, 440.0], [59.0, 440.0], [59.1, 440.0], [59.2, 441.0], [59.3, 441.0], [59.4, 441.0], [59.5, 441.0], [59.6, 441.0], [59.7, 441.0], [59.8, 441.0], [59.9, 441.0], [60.0, 441.0], [60.1, 442.0], [60.2, 442.0], [60.3, 442.0], [60.4, 442.0], [60.5, 442.0], [60.6, 442.0], [60.7, 442.0], [60.8, 443.0], [60.9, 443.0], [61.0, 443.0], [61.1, 443.0], [61.2, 443.0], [61.3, 443.0], [61.4, 443.0], [61.5, 443.0], [61.6, 443.0], [61.7, 443.0], [61.8, 443.0], [61.9, 443.0], [62.0, 443.0], [62.1, 443.0], [62.2, 444.0], [62.3, 444.0], [62.4, 444.0], [62.5, 444.0], [62.6, 444.0], [62.7, 444.0], [62.8, 444.0], [62.9, 445.0], [63.0, 445.0], [63.1, 445.0], [63.2, 445.0], [63.3, 445.0], [63.4, 445.0], [63.5, 445.0], [63.6, 445.0], [63.7, 446.0], [63.8, 446.0], [63.9, 446.0], [64.0, 446.0], [64.1, 446.0], [64.2, 446.0], [64.3, 446.0], [64.4, 446.0], [64.5, 446.0], [64.6, 446.0], [64.7, 446.0], [64.8, 446.0], [64.9, 447.0], [65.0, 447.0], [65.1, 447.0], [65.2, 447.0], [65.3, 447.0], [65.4, 447.0], [65.5, 447.0], [65.6, 447.0], [65.7, 447.0], [65.8, 447.0], [65.9, 447.0], [66.0, 448.0], [66.1, 448.0], [66.2, 448.0], [66.3, 448.0], [66.4, 448.0], [66.5, 448.0], [66.6, 448.0], [66.7, 448.0], [66.8, 448.0], [66.9, 449.0], [67.0, 449.0], [67.1, 449.0], [67.2, 449.0], [67.3, 449.0], [67.4, 449.0], [67.5, 449.0], [67.6, 449.0], [67.7, 449.0], [67.8, 450.0], [67.9, 450.0], [68.0, 450.0], [68.1, 450.0], [68.2, 450.0], [68.3, 450.0], [68.4, 450.0], [68.5, 450.0], [68.6, 450.0], [68.7, 450.0], [68.8, 451.0], [68.9, 451.0], [69.0, 451.0], [69.1, 451.0], [69.2, 451.0], [69.3, 451.0], [69.4, 451.0], [69.5, 452.0], [69.6, 452.0], [69.7, 452.0], [69.8, 452.0], [69.9, 452.0], [70.0, 452.0], [70.1, 452.0], [70.2, 452.0], [70.3, 452.0], [70.4, 452.0], [70.5, 452.0], [70.6, 452.0], [70.7, 452.0], [70.8, 453.0], [70.9, 453.0], [71.0, 453.0], [71.1, 453.0], [71.2, 453.0], [71.3, 453.0], [71.4, 453.0], [71.5, 454.0], [71.6, 454.0], [71.7, 454.0], [71.8, 454.0], [71.9, 454.0], [72.0, 454.0], [72.1, 454.0], [72.2, 454.0], [72.3, 454.0], [72.4, 454.0], [72.5, 455.0], [72.6, 455.0], [72.7, 455.0], [72.8, 455.0], [72.9, 455.0], [73.0, 456.0], [73.1, 456.0], [73.2, 456.0], [73.3, 456.0], [73.4, 456.0], [73.5, 456.0], [73.6, 456.0], [73.7, 456.0], [73.8, 456.0], [73.9, 456.0], [74.0, 457.0], [74.1, 457.0], [74.2, 457.0], [74.3, 457.0], [74.4, 457.0], [74.5, 457.0], [74.6, 457.0], [74.7, 458.0], [74.8, 458.0], [74.9, 458.0], [75.0, 458.0], [75.1, 458.0], [75.2, 458.0], [75.3, 458.0], [75.4, 458.0], [75.5, 459.0], [75.6, 459.0], [75.7, 459.0], [75.8, 459.0], [75.9, 459.0], [76.0, 459.0], [76.1, 459.0], [76.2, 460.0], [76.3, 460.0], [76.4, 460.0], [76.5, 460.0], [76.6, 460.0], [76.7, 460.0], [76.8, 460.0], [76.9, 460.0], [77.0, 460.0], [77.1, 460.0], [77.2, 461.0], [77.3, 461.0], [77.4, 461.0], [77.5, 461.0], [77.6, 461.0], [77.7, 461.0], [77.8, 461.0], [77.9, 462.0], [78.0, 462.0], [78.1, 462.0], [78.2, 462.0], [78.3, 462.0], [78.4, 462.0], [78.5, 462.0], [78.6, 462.0], [78.7, 462.0], [78.8, 463.0], [78.9, 463.0], [79.0, 463.0], [79.1, 463.0], [79.2, 463.0], [79.3, 463.0], [79.4, 463.0], [79.5, 464.0], [79.6, 464.0], [79.7, 464.0], [79.8, 464.0], [79.9, 464.0], [80.0, 464.0], [80.1, 464.0], [80.2, 464.0], [80.3, 464.0], [80.4, 465.0], [80.5, 465.0], [80.6, 465.0], [80.7, 465.0], [80.8, 465.0], [80.9, 465.0], [81.0, 465.0], [81.1, 465.0], [81.2, 466.0], [81.3, 466.0], [81.4, 466.0], [81.5, 466.0], [81.6, 466.0], [81.7, 466.0], [81.8, 467.0], [81.9, 467.0], [82.0, 467.0], [82.1, 467.0], [82.2, 467.0], [82.3, 467.0], [82.4, 467.0], [82.5, 467.0], [82.6, 468.0], [82.7, 468.0], [82.8, 468.0], [82.9, 468.0], [83.0, 468.0], [83.1, 468.0], [83.2, 468.0], [83.3, 468.0], [83.4, 468.0], [83.5, 469.0], [83.6, 469.0], [83.7, 469.0], [83.8, 469.0], [83.9, 469.0], [84.0, 470.0], [84.1, 470.0], [84.2, 470.0], [84.3, 470.0], [84.4, 470.0], [84.5, 470.0], [84.6, 471.0], [84.7, 471.0], [84.8, 471.0], [84.9, 471.0], [85.0, 471.0], [85.1, 471.0], [85.2, 471.0], [85.3, 471.0], [85.4, 472.0], [85.5, 472.0], [85.6, 472.0], [85.7, 472.0], [85.8, 472.0], [85.9, 473.0], [86.0, 473.0], [86.1, 473.0], [86.2, 473.0], [86.3, 473.0], [86.4, 473.0], [86.5, 473.0], [86.6, 473.0], [86.7, 474.0], [86.8, 474.0], [86.9, 474.0], [87.0, 474.0], [87.1, 474.0], [87.2, 474.0], [87.3, 475.0], [87.4, 475.0], [87.5, 475.0], [87.6, 475.0], [87.7, 475.0], [87.8, 475.0], [87.9, 476.0], [88.0, 476.0], [88.1, 476.0], [88.2, 476.0], [88.3, 476.0], [88.4, 476.0], [88.5, 477.0], [88.6, 477.0], [88.7, 477.0], [88.8, 477.0], [88.9, 477.0], [89.0, 477.0], [89.1, 478.0], [89.2, 478.0], [89.3, 478.0], [89.4, 478.0], [89.5, 478.0], [89.6, 478.0], [89.7, 479.0], [89.8, 479.0], [89.9, 479.0], [90.0, 479.0], [90.1, 479.0], [90.2, 479.0], [90.3, 480.0], [90.4, 480.0], [90.5, 480.0], [90.6, 480.0], [90.7, 480.0], [90.8, 481.0], [90.9, 481.0], [91.0, 481.0], [91.1, 481.0], [91.2, 482.0], [91.3, 482.0], [91.4, 482.0], [91.5, 482.0], [91.6, 482.0], [91.7, 483.0], [91.8, 483.0], [91.9, 483.0], [92.0, 483.0], [92.1, 483.0], [92.2, 484.0], [92.3, 484.0], [92.4, 484.0], [92.5, 484.0], [92.6, 484.0], [92.7, 485.0], [92.8, 485.0], [92.9, 485.0], [93.0, 486.0], [93.1, 486.0], [93.2, 486.0], [93.3, 487.0], [93.4, 487.0], [93.5, 487.0], [93.6, 488.0], [93.7, 488.0], [93.8, 488.0], [93.9, 489.0], [94.0, 489.0], [94.1, 490.0], [94.2, 490.0], [94.3, 490.0], [94.4, 490.0], [94.5, 491.0], [94.6, 491.0], [94.7, 492.0], [94.8, 492.0], [94.9, 492.0], [95.0, 492.0], [95.1, 493.0], [95.2, 493.0], [95.3, 494.0], [95.4, 494.0], [95.5, 494.0], [95.6, 494.0], [95.7, 495.0], [95.8, 495.0], [95.9, 496.0], [96.0, 496.0], [96.1, 497.0], [96.2, 497.0], [96.3, 498.0], [96.4, 498.0], [96.5, 498.0], [96.6, 498.0], [96.7, 498.0], [96.8, 499.0], [96.9, 499.0], [97.0, 501.0], [97.1, 501.0], [97.2, 502.0], [97.3, 502.0], [97.4, 503.0], [97.5, 504.0], [97.6, 504.0], [97.7, 506.0], [97.8, 507.0], [97.9, 509.0], [98.0, 511.0], [98.1, 511.0], [98.2, 513.0], [98.3, 514.0], [98.4, 515.0], [98.5, 517.0], [98.6, 517.0], [98.7, 518.0], [98.8, 520.0], [98.9, 521.0], [99.0, 526.0], [99.1, 527.0], [99.2, 533.0], [99.3, 535.0], [99.4, 538.0], [99.5, 544.0], [99.6, 547.0], [99.7, 555.0], [99.8, 570.0], [99.9, 669.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 2641.0, "series": [{"data": [[300.0, 527.0], [600.0, 3.0], [700.0, 2.0], [100.0, 27.0], [200.0, 82.0], [400.0, 2641.0], [500.0, 99.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 102.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3279.0, "series": [{"data": [[0.0, 3279.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 102.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.886718749999993, "minX": 1.78900248E12, "maxY": 24.904000000000003, "series": [{"data": [[1.78900254E12, 24.904000000000003], [1.78900248E12, 17.886718749999993]], "isOverall": false, "label": "Cenario 1 - Listar Comandas (GET, leitura pesada)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900254E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 209.75, "minX": 1.0, "maxY": 436.02654867256626, "series": [{"data": [[2.0, 213.33333333333331], [3.0, 209.75], [4.0, 294.6666666666667], [5.0, 422.5], [6.0, 427.75], [7.0, 360.5], [8.0, 354.6666666666667], [9.0, 257.77777777777777], [10.0, 222.63636363636363], [11.0, 214.8181818181818], [12.0, 226.33333333333331], [13.0, 244.24999999999997], [14.0, 231.14285714285714], [15.0, 263.3636363636364], [1.0, 263.5], [16.0, 282.08333333333337], [17.0, 292.63636363636357], [18.0, 308.3076923076923], [19.0, 334.1818181818182], [20.0, 340.9166666666667], [21.0, 351.24999999999994], [22.0, 363.6153846153846], [23.0, 374.7272727272727], [24.0, 393.21428571428567], [25.0, 436.02654867256626]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}, {"data": [[24.372670807453407, 427.229813664596]], "isOverall": false, "label": "GET /comanda/api/comandas-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 580.2666666666667, "minX": 1.78900248E12, "maxY": 6509692.5, "series": [{"data": [[1.78900254E12, 6509692.5], [1.78900248E12, 533274.7833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78900254E12, 7083.333333333333], [1.78900248E12, 580.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900254E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 317.9570312499999, "minX": 1.78900248E12, "maxY": 436.1814399999992, "series": [{"data": [[1.78900254E12, 436.1814399999992], [1.78900248E12, 317.9570312499999]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900254E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 167.18359374999994, "minX": 1.78900248E12, "maxY": 295.89056000000016, "series": [{"data": [[1.78900254E12, 295.89056000000016], [1.78900248E12, 167.18359374999994]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900254E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78900248E12, "maxY": 0.2421875000000001, "series": [{"data": [[1.78900254E12, 0.0], [1.78900248E12, 0.2421875000000001]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900254E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 120.0, "minX": 1.78900248E12, "maxY": 723.0, "series": [{"data": [[1.78900254E12, 723.0], [1.78900248E12, 497.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78900254E12, 167.0], [1.78900248E12, 120.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78900254E12, 480.0], [1.78900248E12, 429.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78900254E12, 527.0], [1.78900248E12, 477.43]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78900254E12, 434.0], [1.78900248E12, 329.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78900254E12, 494.0], [1.78900248E12, 457.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900254E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 132.5, "minX": 8.0, "maxY": 468.0, "series": [{"data": [[8.0, 132.5], [35.0, 411.0], [25.0, 272.0], [52.0, 468.0], [53.0, 459.0], [55.0, 431.0], [54.0, 443.5], [56.0, 438.5], [57.0, 433.0], [58.0, 431.5], [59.0, 427.0], [60.0, 422.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 29.5, "minX": 8.0, "maxY": 314.0, "series": [{"data": [[8.0, 29.5], [35.0, 282.0], [25.0, 71.0], [52.0, 314.0], [53.0, 309.0], [55.0, 289.0], [54.0, 298.5], [56.0, 296.0], [57.0, 294.0], [58.0, 292.0], [59.0, 290.0], [60.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 1.78900248E12, "maxY": 51.68333333333333, "series": [{"data": [[1.78900254E12, 51.68333333333333], [1.78900248E12, 4.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900254E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.266666666666667, "minX": 1.78900248E12, "maxY": 52.083333333333336, "series": [{"data": [[1.78900254E12, 52.083333333333336], [1.78900248E12, 4.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900254E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.266666666666667, "minX": 1.78900248E12, "maxY": 52.083333333333336, "series": [{"data": [[1.78900254E12, 52.083333333333336], [1.78900248E12, 4.266666666666667]], "isOverall": false, "label": "GET /comanda/api/comandas-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900254E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.266666666666667, "minX": 1.78900248E12, "maxY": 52.083333333333336, "series": [{"data": [[1.78900254E12, 52.083333333333336], [1.78900248E12, 4.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900254E12, "title": "Total Transactions Per Second"}},
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

