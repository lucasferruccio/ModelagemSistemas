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
        data: {"result": {"minY": 158.0, "minX": 0.0, "maxY": 7458.0, "series": [{"data": [[0.0, 158.0], [0.1, 169.0], [0.2, 174.0], [0.3, 178.0], [0.4, 180.0], [0.5, 186.0], [0.6, 191.0], [0.7, 196.0], [0.8, 211.0], [0.9, 222.0], [1.0, 253.0], [1.1, 265.0], [1.2, 295.0], [1.3, 323.0], [1.4, 339.0], [1.5, 381.0], [1.6, 404.0], [1.7, 414.0], [1.8, 486.0], [1.9, 496.0], [2.0, 513.0], [2.1, 539.0], [2.2, 558.0], [2.3, 582.0], [2.4, 630.0], [2.5, 631.0], [2.6, 656.0], [2.7, 678.0], [2.8, 723.0], [2.9, 735.0], [3.0, 760.0], [3.1, 772.0], [3.2, 810.0], [3.3, 846.0], [3.4, 855.0], [3.5, 862.0], [3.6, 913.0], [3.7, 957.0], [3.8, 996.0], [3.9, 1030.0], [4.0, 1067.0], [4.1, 1095.0], [4.2, 1113.0], [4.3, 1145.0], [4.4, 1174.0], [4.5, 1198.0], [4.6, 1231.0], [4.7, 1265.0], [4.8, 1296.0], [4.9, 1309.0], [5.0, 1345.0], [5.1, 1371.0], [5.2, 1417.0], [5.3, 1437.0], [5.4, 1462.0], [5.5, 1487.0], [5.6, 1510.0], [5.7, 1526.0], [5.8, 1580.0], [5.9, 1587.0], [6.0, 1599.0], [6.1, 1642.0], [6.2, 1657.0], [6.3, 1683.0], [6.4, 1733.0], [6.5, 1740.0], [6.6, 1757.0], [6.7, 1802.0], [6.8, 1818.0], [6.9, 1835.0], [7.0, 1882.0], [7.1, 1905.0], [7.2, 1944.0], [7.3, 1962.0], [7.4, 1995.0], [7.5, 2016.0], [7.6, 2036.0], [7.7, 2071.0], [7.8, 2100.0], [7.9, 2117.0], [8.0, 2164.0], [8.1, 2189.0], [8.2, 2212.0], [8.3, 2238.0], [8.4, 2253.0], [8.5, 2282.0], [8.6, 2313.0], [8.7, 2341.0], [8.8, 2382.0], [8.9, 2389.0], [9.0, 2398.0], [9.1, 2435.0], [9.2, 2466.0], [9.3, 2477.0], [9.4, 2506.0], [9.5, 2539.0], [9.6, 2548.0], [9.7, 2572.0], [9.8, 2611.0], [9.9, 2620.0], [10.0, 2646.0], [10.1, 2675.0], [10.2, 2692.0], [10.3, 2723.0], [10.4, 2757.0], [10.5, 2784.0], [10.6, 2810.0], [10.7, 2821.0], [10.8, 2858.0], [10.9, 2868.0], [11.0, 2898.0], [11.1, 2937.0], [11.2, 2956.0], [11.3, 2979.0], [11.4, 3000.0], [11.5, 3007.0], [11.6, 3042.0], [11.7, 3081.0], [11.8, 3108.0], [11.9, 3126.0], [12.0, 3141.0], [12.1, 3171.0], [12.2, 3204.0], [12.3, 3222.0], [12.4, 3249.0], [12.5, 3279.0], [12.6, 3302.0], [12.7, 3328.0], [12.8, 3355.0], [12.9, 3358.0], [13.0, 3361.0], [13.1, 3362.0], [13.2, 3366.0], [13.3, 3369.0], [13.4, 3372.0], [13.5, 3373.0], [13.6, 3377.0], [13.7, 3383.0], [13.8, 3387.0], [13.9, 3389.0], [14.0, 3392.0], [14.1, 3394.0], [14.2, 3396.0], [14.3, 3397.0], [14.4, 3404.0], [14.5, 3406.0], [14.6, 3407.0], [14.7, 3408.0], [14.8, 3410.0], [14.9, 3411.0], [15.0, 3412.0], [15.1, 3414.0], [15.2, 3417.0], [15.3, 3418.0], [15.4, 3419.0], [15.5, 3420.0], [15.6, 3423.0], [15.7, 3424.0], [15.8, 3425.0], [15.9, 3426.0], [16.0, 3427.0], [16.1, 3428.0], [16.2, 3430.0], [16.3, 3431.0], [16.4, 3431.0], [16.5, 3432.0], [16.6, 3433.0], [16.7, 3434.0], [16.8, 3435.0], [16.9, 3436.0], [17.0, 3436.0], [17.1, 3437.0], [17.2, 3438.0], [17.3, 3439.0], [17.4, 3440.0], [17.5, 3440.0], [17.6, 3441.0], [17.7, 3442.0], [17.8, 3442.0], [17.9, 3443.0], [18.0, 3443.0], [18.1, 3444.0], [18.2, 3444.0], [18.3, 3444.0], [18.4, 3445.0], [18.5, 3446.0], [18.6, 3446.0], [18.7, 3447.0], [18.8, 3449.0], [18.9, 3450.0], [19.0, 3451.0], [19.1, 3451.0], [19.2, 3455.0], [19.3, 3455.0], [19.4, 3455.0], [19.5, 3456.0], [19.6, 3458.0], [19.7, 3458.0], [19.8, 3459.0], [19.9, 3459.0], [20.0, 3459.0], [20.1, 3461.0], [20.2, 3462.0], [20.3, 3463.0], [20.4, 3464.0], [20.5, 3465.0], [20.6, 3466.0], [20.7, 3467.0], [20.8, 3470.0], [20.9, 3470.0], [21.0, 3471.0], [21.1, 3471.0], [21.2, 3472.0], [21.3, 3473.0], [21.4, 3473.0], [21.5, 3474.0], [21.6, 3474.0], [21.7, 3475.0], [21.8, 3476.0], [21.9, 3477.0], [22.0, 3478.0], [22.1, 3479.0], [22.2, 3479.0], [22.3, 3479.0], [22.4, 3480.0], [22.5, 3480.0], [22.6, 3481.0], [22.7, 3482.0], [22.8, 3482.0], [22.9, 3483.0], [23.0, 3483.0], [23.1, 3484.0], [23.2, 3485.0], [23.3, 3485.0], [23.4, 3486.0], [23.5, 3487.0], [23.6, 3487.0], [23.7, 3488.0], [23.8, 3489.0], [23.9, 3489.0], [24.0, 3490.0], [24.1, 3491.0], [24.2, 3491.0], [24.3, 3491.0], [24.4, 3491.0], [24.5, 3492.0], [24.6, 3492.0], [24.7, 3492.0], [24.8, 3492.0], [24.9, 3493.0], [25.0, 3493.0], [25.1, 3494.0], [25.2, 3495.0], [25.3, 3495.0], [25.4, 3496.0], [25.5, 3496.0], [25.6, 3497.0], [25.7, 3497.0], [25.8, 3497.0], [25.9, 3498.0], [26.0, 3498.0], [26.1, 3499.0], [26.2, 3499.0], [26.3, 3499.0], [26.4, 3500.0], [26.5, 3500.0], [26.6, 3501.0], [26.7, 3501.0], [26.8, 3501.0], [26.9, 3501.0], [27.0, 3502.0], [27.1, 3503.0], [27.2, 3503.0], [27.3, 3503.0], [27.4, 3503.0], [27.5, 3503.0], [27.6, 3504.0], [27.7, 3504.0], [27.8, 3504.0], [27.9, 3505.0], [28.0, 3505.0], [28.1, 3505.0], [28.2, 3505.0], [28.3, 3506.0], [28.4, 3506.0], [28.5, 3506.0], [28.6, 3507.0], [28.7, 3507.0], [28.8, 3508.0], [28.9, 3508.0], [29.0, 3509.0], [29.1, 3509.0], [29.2, 3509.0], [29.3, 3510.0], [29.4, 3510.0], [29.5, 3510.0], [29.6, 3510.0], [29.7, 3511.0], [29.8, 3511.0], [29.9, 3511.0], [30.0, 3512.0], [30.1, 3512.0], [30.2, 3512.0], [30.3, 3513.0], [30.4, 3513.0], [30.5, 3513.0], [30.6, 3513.0], [30.7, 3513.0], [30.8, 3514.0], [30.9, 3514.0], [31.0, 3515.0], [31.1, 3515.0], [31.2, 3515.0], [31.3, 3515.0], [31.4, 3516.0], [31.5, 3516.0], [31.6, 3516.0], [31.7, 3516.0], [31.8, 3517.0], [31.9, 3517.0], [32.0, 3517.0], [32.1, 3517.0], [32.2, 3518.0], [32.3, 3518.0], [32.4, 3519.0], [32.5, 3519.0], [32.6, 3520.0], [32.7, 3520.0], [32.8, 3520.0], [32.9, 3520.0], [33.0, 3521.0], [33.1, 3521.0], [33.2, 3522.0], [33.3, 3522.0], [33.4, 3523.0], [33.5, 3523.0], [33.6, 3523.0], [33.7, 3523.0], [33.8, 3524.0], [33.9, 3524.0], [34.0, 3524.0], [34.1, 3524.0], [34.2, 3524.0], [34.3, 3525.0], [34.4, 3525.0], [34.5, 3525.0], [34.6, 3525.0], [34.7, 3526.0], [34.8, 3526.0], [34.9, 3526.0], [35.0, 3527.0], [35.1, 3527.0], [35.2, 3527.0], [35.3, 3527.0], [35.4, 3527.0], [35.5, 3528.0], [35.6, 3528.0], [35.7, 3528.0], [35.8, 3528.0], [35.9, 3528.0], [36.0, 3529.0], [36.1, 3529.0], [36.2, 3529.0], [36.3, 3529.0], [36.4, 3529.0], [36.5, 3529.0], [36.6, 3530.0], [36.7, 3530.0], [36.8, 3530.0], [36.9, 3530.0], [37.0, 3531.0], [37.1, 3531.0], [37.2, 3532.0], [37.3, 3532.0], [37.4, 3532.0], [37.5, 3532.0], [37.6, 3533.0], [37.7, 3533.0], [37.8, 3533.0], [37.9, 3533.0], [38.0, 3533.0], [38.1, 3534.0], [38.2, 3534.0], [38.3, 3534.0], [38.4, 3534.0], [38.5, 3535.0], [38.6, 3535.0], [38.7, 3535.0], [38.8, 3535.0], [38.9, 3535.0], [39.0, 3535.0], [39.1, 3536.0], [39.2, 3536.0], [39.3, 3536.0], [39.4, 3536.0], [39.5, 3536.0], [39.6, 3536.0], [39.7, 3537.0], [39.8, 3537.0], [39.9, 3537.0], [40.0, 3537.0], [40.1, 3537.0], [40.2, 3537.0], [40.3, 3538.0], [40.4, 3538.0], [40.5, 3538.0], [40.6, 3538.0], [40.7, 3538.0], [40.8, 3538.0], [40.9, 3538.0], [41.0, 3539.0], [41.1, 3539.0], [41.2, 3539.0], [41.3, 3539.0], [41.4, 3540.0], [41.5, 3540.0], [41.6, 3540.0], [41.7, 3540.0], [41.8, 3541.0], [41.9, 3541.0], [42.0, 3541.0], [42.1, 3541.0], [42.2, 3541.0], [42.3, 3542.0], [42.4, 3542.0], [42.5, 3542.0], [42.6, 3543.0], [42.7, 3543.0], [42.8, 3543.0], [42.9, 3543.0], [43.0, 3543.0], [43.1, 3544.0], [43.2, 3544.0], [43.3, 3544.0], [43.4, 3545.0], [43.5, 3545.0], [43.6, 3545.0], [43.7, 3545.0], [43.8, 3545.0], [43.9, 3545.0], [44.0, 3546.0], [44.1, 3546.0], [44.2, 3546.0], [44.3, 3546.0], [44.4, 3547.0], [44.5, 3547.0], [44.6, 3547.0], [44.7, 3547.0], [44.8, 3547.0], [44.9, 3547.0], [45.0, 3548.0], [45.1, 3548.0], [45.2, 3548.0], [45.3, 3548.0], [45.4, 3549.0], [45.5, 3549.0], [45.6, 3549.0], [45.7, 3549.0], [45.8, 3549.0], [45.9, 3549.0], [46.0, 3550.0], [46.1, 3550.0], [46.2, 3550.0], [46.3, 3550.0], [46.4, 3550.0], [46.5, 3550.0], [46.6, 3550.0], [46.7, 3551.0], [46.8, 3551.0], [46.9, 3551.0], [47.0, 3551.0], [47.1, 3551.0], [47.2, 3552.0], [47.3, 3552.0], [47.4, 3552.0], [47.5, 3552.0], [47.6, 3552.0], [47.7, 3552.0], [47.8, 3553.0], [47.9, 3553.0], [48.0, 3553.0], [48.1, 3553.0], [48.2, 3553.0], [48.3, 3553.0], [48.4, 3554.0], [48.5, 3554.0], [48.6, 3554.0], [48.7, 3554.0], [48.8, 3554.0], [48.9, 3554.0], [49.0, 3555.0], [49.1, 3555.0], [49.2, 3556.0], [49.3, 3556.0], [49.4, 3556.0], [49.5, 3556.0], [49.6, 3556.0], [49.7, 3556.0], [49.8, 3557.0], [49.9, 3557.0], [50.0, 3557.0], [50.1, 3558.0], [50.2, 3558.0], [50.3, 3558.0], [50.4, 3558.0], [50.5, 3558.0], [50.6, 3558.0], [50.7, 3559.0], [50.8, 3559.0], [50.9, 3559.0], [51.0, 3559.0], [51.1, 3560.0], [51.2, 3560.0], [51.3, 3561.0], [51.4, 3561.0], [51.5, 3561.0], [51.6, 3562.0], [51.7, 3562.0], [51.8, 3562.0], [51.9, 3562.0], [52.0, 3563.0], [52.1, 3563.0], [52.2, 3564.0], [52.3, 3564.0], [52.4, 3564.0], [52.5, 3564.0], [52.6, 3565.0], [52.7, 3565.0], [52.8, 3565.0], [52.9, 3566.0], [53.0, 3566.0], [53.1, 3566.0], [53.2, 3566.0], [53.3, 3567.0], [53.4, 3567.0], [53.5, 3567.0], [53.6, 3567.0], [53.7, 3567.0], [53.8, 3568.0], [53.9, 3568.0], [54.0, 3568.0], [54.1, 3568.0], [54.2, 3568.0], [54.3, 3568.0], [54.4, 3569.0], [54.5, 3569.0], [54.6, 3569.0], [54.7, 3569.0], [54.8, 3570.0], [54.9, 3570.0], [55.0, 3570.0], [55.1, 3570.0], [55.2, 3571.0], [55.3, 3571.0], [55.4, 3571.0], [55.5, 3572.0], [55.6, 3572.0], [55.7, 3573.0], [55.8, 3573.0], [55.9, 3574.0], [56.0, 3574.0], [56.1, 3574.0], [56.2, 3574.0], [56.3, 3574.0], [56.4, 3574.0], [56.5, 3575.0], [56.6, 3575.0], [56.7, 3575.0], [56.8, 3576.0], [56.9, 3576.0], [57.0, 3576.0], [57.1, 3576.0], [57.2, 3577.0], [57.3, 3577.0], [57.4, 3577.0], [57.5, 3577.0], [57.6, 3577.0], [57.7, 3578.0], [57.8, 3578.0], [57.9, 3578.0], [58.0, 3578.0], [58.1, 3579.0], [58.2, 3579.0], [58.3, 3580.0], [58.4, 3580.0], [58.5, 3580.0], [58.6, 3580.0], [58.7, 3581.0], [58.8, 3582.0], [58.9, 3582.0], [59.0, 3582.0], [59.1, 3583.0], [59.2, 3583.0], [59.3, 3583.0], [59.4, 3584.0], [59.5, 3584.0], [59.6, 3584.0], [59.7, 3585.0], [59.8, 3585.0], [59.9, 3585.0], [60.0, 3586.0], [60.1, 3586.0], [60.2, 3586.0], [60.3, 3586.0], [60.4, 3587.0], [60.5, 3587.0], [60.6, 3587.0], [60.7, 3587.0], [60.8, 3588.0], [60.9, 3588.0], [61.0, 3588.0], [61.1, 3589.0], [61.2, 3589.0], [61.3, 3589.0], [61.4, 3589.0], [61.5, 3590.0], [61.6, 3590.0], [61.7, 3590.0], [61.8, 3590.0], [61.9, 3591.0], [62.0, 3591.0], [62.1, 3592.0], [62.2, 3592.0], [62.3, 3592.0], [62.4, 3593.0], [62.5, 3593.0], [62.6, 3594.0], [62.7, 3594.0], [62.8, 3594.0], [62.9, 3595.0], [63.0, 3595.0], [63.1, 3596.0], [63.2, 3596.0], [63.3, 3597.0], [63.4, 3597.0], [63.5, 3598.0], [63.6, 3598.0], [63.7, 3598.0], [63.8, 3598.0], [63.9, 3599.0], [64.0, 3599.0], [64.1, 3600.0], [64.2, 3600.0], [64.3, 3600.0], [64.4, 3601.0], [64.5, 3602.0], [64.6, 3602.0], [64.7, 3603.0], [64.8, 3603.0], [64.9, 3604.0], [65.0, 3604.0], [65.1, 3605.0], [65.2, 3606.0], [65.3, 3606.0], [65.4, 3607.0], [65.5, 3607.0], [65.6, 3608.0], [65.7, 3608.0], [65.8, 3609.0], [65.9, 3609.0], [66.0, 3610.0], [66.1, 3610.0], [66.2, 3611.0], [66.3, 3612.0], [66.4, 3613.0], [66.5, 3614.0], [66.6, 3615.0], [66.7, 3616.0], [66.8, 3616.0], [66.9, 3617.0], [67.0, 3618.0], [67.1, 3619.0], [67.2, 3620.0], [67.3, 3620.0], [67.4, 3621.0], [67.5, 3622.0], [67.6, 3622.0], [67.7, 3623.0], [67.8, 3625.0], [67.9, 3625.0], [68.0, 3627.0], [68.1, 3628.0], [68.2, 3628.0], [68.3, 3629.0], [68.4, 3629.0], [68.5, 3630.0], [68.6, 3631.0], [68.7, 3632.0], [68.8, 3632.0], [68.9, 3632.0], [69.0, 3633.0], [69.1, 3634.0], [69.2, 3635.0], [69.3, 3635.0], [69.4, 3636.0], [69.5, 3637.0], [69.6, 3639.0], [69.7, 3639.0], [69.8, 3640.0], [69.9, 3641.0], [70.0, 3641.0], [70.1, 3642.0], [70.2, 3643.0], [70.3, 3644.0], [70.4, 3645.0], [70.5, 3646.0], [70.6, 3647.0], [70.7, 3648.0], [70.8, 3649.0], [70.9, 3649.0], [71.0, 3651.0], [71.1, 3652.0], [71.2, 3653.0], [71.3, 3655.0], [71.4, 3656.0], [71.5, 3656.0], [71.6, 3657.0], [71.7, 3659.0], [71.8, 3660.0], [71.9, 3661.0], [72.0, 3662.0], [72.1, 3662.0], [72.2, 3663.0], [72.3, 3663.0], [72.4, 3664.0], [72.5, 3665.0], [72.6, 3665.0], [72.7, 3666.0], [72.8, 3667.0], [72.9, 3667.0], [73.0, 3668.0], [73.1, 3669.0], [73.2, 3669.0], [73.3, 3670.0], [73.4, 3670.0], [73.5, 3670.0], [73.6, 3671.0], [73.7, 3672.0], [73.8, 3673.0], [73.9, 3674.0], [74.0, 3675.0], [74.1, 3676.0], [74.2, 3677.0], [74.3, 3677.0], [74.4, 3677.0], [74.5, 3678.0], [74.6, 3678.0], [74.7, 3679.0], [74.8, 3679.0], [74.9, 3680.0], [75.0, 3681.0], [75.1, 3682.0], [75.2, 3682.0], [75.3, 3683.0], [75.4, 3684.0], [75.5, 3685.0], [75.6, 3685.0], [75.7, 3685.0], [75.8, 3686.0], [75.9, 3686.0], [76.0, 3687.0], [76.1, 3687.0], [76.2, 3688.0], [76.3, 3688.0], [76.4, 3689.0], [76.5, 3690.0], [76.6, 3690.0], [76.7, 3691.0], [76.8, 3691.0], [76.9, 3692.0], [77.0, 3692.0], [77.1, 3693.0], [77.2, 3693.0], [77.3, 3694.0], [77.4, 3694.0], [77.5, 3694.0], [77.6, 3695.0], [77.7, 3695.0], [77.8, 3696.0], [77.9, 3696.0], [78.0, 3697.0], [78.1, 3697.0], [78.2, 3698.0], [78.3, 3699.0], [78.4, 3699.0], [78.5, 3700.0], [78.6, 3700.0], [78.7, 3700.0], [78.8, 3701.0], [78.9, 3701.0], [79.0, 3701.0], [79.1, 3702.0], [79.2, 3702.0], [79.3, 3702.0], [79.4, 3703.0], [79.5, 3703.0], [79.6, 3704.0], [79.7, 3704.0], [79.8, 3705.0], [79.9, 3705.0], [80.0, 3706.0], [80.1, 3706.0], [80.2, 3707.0], [80.3, 3707.0], [80.4, 3707.0], [80.5, 3708.0], [80.6, 3708.0], [80.7, 3708.0], [80.8, 3708.0], [80.9, 3710.0], [81.0, 3710.0], [81.1, 3711.0], [81.2, 3711.0], [81.3, 3712.0], [81.4, 3712.0], [81.5, 3712.0], [81.6, 3713.0], [81.7, 3713.0], [81.8, 3713.0], [81.9, 3713.0], [82.0, 3714.0], [82.1, 3714.0], [82.2, 3715.0], [82.3, 3715.0], [82.4, 3715.0], [82.5, 3716.0], [82.6, 3716.0], [82.7, 3716.0], [82.8, 3717.0], [82.9, 3717.0], [83.0, 3717.0], [83.1, 3718.0], [83.2, 3718.0], [83.3, 3718.0], [83.4, 3719.0], [83.5, 3720.0], [83.6, 3720.0], [83.7, 3720.0], [83.8, 3721.0], [83.9, 3721.0], [84.0, 3721.0], [84.1, 3721.0], [84.2, 3722.0], [84.3, 3722.0], [84.4, 3722.0], [84.5, 3723.0], [84.6, 3724.0], [84.7, 3724.0], [84.8, 3724.0], [84.9, 3725.0], [85.0, 3725.0], [85.1, 3726.0], [85.2, 3726.0], [85.3, 3727.0], [85.4, 3727.0], [85.5, 3727.0], [85.6, 3728.0], [85.7, 3729.0], [85.8, 3729.0], [85.9, 3730.0], [86.0, 3730.0], [86.1, 3730.0], [86.2, 3731.0], [86.3, 3731.0], [86.4, 3731.0], [86.5, 3732.0], [86.6, 3732.0], [86.7, 3733.0], [86.8, 3733.0], [86.9, 3734.0], [87.0, 3734.0], [87.1, 3735.0], [87.2, 3735.0], [87.3, 3735.0], [87.4, 3736.0], [87.5, 3737.0], [87.6, 3737.0], [87.7, 3738.0], [87.8, 3739.0], [87.9, 3740.0], [88.0, 3741.0], [88.1, 3741.0], [88.2, 3741.0], [88.3, 3742.0], [88.4, 3743.0], [88.5, 3744.0], [88.6, 3745.0], [88.7, 3745.0], [88.8, 3746.0], [88.9, 3747.0], [89.0, 3749.0], [89.1, 3750.0], [89.2, 3752.0], [89.3, 3753.0], [89.4, 3754.0], [89.5, 3754.0], [89.6, 3755.0], [89.7, 3755.0], [89.8, 3757.0], [89.9, 3758.0], [90.0, 3759.0], [90.1, 3762.0], [90.2, 3763.0], [90.3, 3764.0], [90.4, 3766.0], [90.5, 3772.0], [90.6, 3773.0], [90.7, 3774.0], [90.8, 3778.0], [90.9, 3782.0], [91.0, 3786.0], [91.1, 3792.0], [91.2, 3794.0], [91.3, 3796.0], [91.4, 3799.0], [91.5, 3801.0], [91.6, 3806.0], [91.7, 3818.0], [91.8, 3820.0], [91.9, 3822.0], [92.0, 3826.0], [92.1, 3829.0], [92.2, 3834.0], [92.3, 3837.0], [92.4, 3839.0], [92.5, 3845.0], [92.6, 3849.0], [92.7, 3853.0], [92.8, 3856.0], [92.9, 3857.0], [93.0, 3861.0], [93.1, 3862.0], [93.2, 3867.0], [93.3, 3872.0], [93.4, 3873.0], [93.5, 3878.0], [93.6, 3882.0], [93.7, 3887.0], [93.8, 3891.0], [93.9, 3903.0], [94.0, 3910.0], [94.1, 3919.0], [94.2, 3922.0], [94.3, 3927.0], [94.4, 3933.0], [94.5, 3940.0], [94.6, 3946.0], [94.7, 3951.0], [94.8, 3961.0], [94.9, 3970.0], [95.0, 3976.0], [95.1, 3982.0], [95.2, 3985.0], [95.3, 3990.0], [95.4, 3996.0], [95.5, 4001.0], [95.6, 4006.0], [95.7, 4013.0], [95.8, 4016.0], [95.9, 4020.0], [96.0, 4023.0], [96.1, 4026.0], [96.2, 4028.0], [96.3, 4032.0], [96.4, 4034.0], [96.5, 4037.0], [96.6, 4039.0], [96.7, 4041.0], [96.8, 4041.0], [96.9, 4043.0], [97.0, 4045.0], [97.1, 4047.0], [97.2, 4048.0], [97.3, 4050.0], [97.4, 4052.0], [97.5, 4054.0], [97.6, 4056.0], [97.7, 4059.0], [97.8, 4059.0], [97.9, 4062.0], [98.0, 4063.0], [98.1, 4066.0], [98.2, 4067.0], [98.3, 4069.0], [98.4, 4072.0], [98.5, 4073.0], [98.6, 4076.0], [98.7, 4079.0], [98.8, 4081.0], [98.9, 4082.0], [99.0, 4084.0], [99.1, 4086.0], [99.2, 4088.0], [99.3, 4091.0], [99.4, 4093.0], [99.5, 4107.0], [99.6, 4115.0], [99.7, 6672.0], [99.8, 6891.0], [99.9, 7069.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1322.0, "series": [{"data": [[600.0, 16.0], [700.0, 15.0], [800.0, 12.0], [900.0, 10.0], [1000.0, 11.0], [1100.0, 13.0], [1200.0, 12.0], [1300.0, 12.0], [1400.0, 13.0], [1500.0, 16.0], [100.0, 26.0], [1600.0, 11.0], [1700.0, 12.0], [1800.0, 14.0], [1900.0, 13.0], [2000.0, 12.0], [2100.0, 11.0], [2200.0, 15.0], [2300.0, 17.0], [2400.0, 13.0], [2500.0, 14.0], [2600.0, 15.0], [2700.0, 11.0], [2800.0, 17.0], [2900.0, 13.0], [3000.0, 14.0], [3100.0, 12.0], [200.0, 18.0], [3200.0, 16.0], [3300.0, 60.0], [3400.0, 421.0], [3500.0, 1322.0], [3600.0, 504.0], [3700.0, 452.0], [3800.0, 86.0], [3900.0, 54.0], [4000.0, 142.0], [4100.0, 6.0], [300.0, 12.0], [5600.0, 1.0], [400.0, 11.0], [6600.0, 2.0], [6800.0, 3.0], [6900.0, 2.0], [6700.0, 1.0], [7000.0, 2.0], [7400.0, 2.0], [500.0, 14.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 68.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3306.0, "series": [{"data": [[0.0, 68.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 127.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3306.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 178.09361233480192, "minX": 1.78900272E12, "maxY": 190.23409178557694, "series": [{"data": [[1.78900278E12, 178.09361233480192], [1.78900272E12, 190.23409178557694]], "isOverall": false, "label": "Cenario 1 - Listar Comandas (GET, leitura pesada)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 253.0, "minX": 1.0, "maxY": 3689.0, "series": [{"data": [[2.0, 3474.0], [3.0, 3522.0], [4.0, 3518.0], [5.0, 3527.0], [6.0, 3520.0], [7.0, 3513.0], [8.0, 3503.0], [9.0, 3510.0], [10.0, 3490.0], [11.0, 3517.0], [12.0, 1292.3333333333333], [13.0, 885.0], [14.0, 1859.0], [15.0, 1853.0], [16.0, 1868.5], [17.0, 1865.5], [18.0, 3524.0], [19.0, 1018.0], [20.0, 844.0], [21.0, 1863.5], [22.0, 3499.0], [23.0, 1907.5], [24.0, 253.0], [25.0, 2448.6666666666665], [26.0, 803.0], [27.0, 1917.0], [28.0, 1895.0], [29.0, 3521.0], [30.0, 1895.5], [31.0, 1912.5], [32.0, 1126.0], [33.0, 1137.0], [34.0, 1412.6666666666667], [35.0, 3538.0], [37.0, 1967.0], [36.0, 3551.0], [38.0, 1968.5], [39.0, 1444.3333333333333], [40.0, 1182.5], [41.0, 1966.0], [42.0, 1377.6666666666667], [43.0, 3552.0], [44.0, 1489.6666666666667], [45.0, 3533.0], [46.0, 1503.6666666666665], [47.0, 1519.0], [48.0, 1513.0], [49.0, 1516.3333333333335], [51.0, 2022.0], [50.0, 3530.0], [52.0, 2049.5], [53.0, 1291.5], [54.0, 2046.0], [55.0, 1550.3333333333335], [56.0, 1561.0], [57.0, 3556.0], [58.0, 2072.0], [59.0, 1413.75], [60.0, 2074.5], [61.0, 1593.0], [62.0, 2083.5], [63.0, 1604.3333333333335], [64.0, 2078.5], [65.0, 2105.5], [66.0, 2082.0], [67.0, 1386.5], [68.0, 2115.5], [69.0, 723.0], [70.0, 2126.75], [71.0, 2135.0], [72.0, 2127.5], [73.0, 1430.75], [74.0, 2124.5], [75.0, 3500.0], [76.0, 1463.75], [77.0, 2151.5], [78.0, 2154.0], [79.0, 2158.5], [80.0, 1491.25], [82.0, 2181.0], [83.0, 1512.0], [81.0, 3505.0], [84.0, 2157.5], [85.0, 2207.5], [86.0, 2186.5], [87.0, 3537.0], [88.0, 1540.0], [89.0, 913.0], [91.0, 1806.0], [90.0, 3531.0], [92.0, 2249.0], [93.0, 2218.0], [94.0, 1823.6666666666665], [95.0, 2251.5], [96.0, 1850.3333333333335], [97.0, 2289.5], [99.0, 1880.6666666666665], [98.0, 3541.0], [100.0, 2301.5], [101.0, 2296.0], [102.0, 2311.5], [103.0, 1689.25], [104.0, 2344.5], [105.0, 2316.5], [106.0, 2299.5], [107.0, 1741.0], [109.0, 2357.0], [110.0, 1770.75], [111.0, 2361.0], [108.0, 3557.0], [112.0, 2389.5], [113.0, 2350.5], [114.0, 1209.0], [115.0, 2379.0], [116.0, 2362.0], [117.0, 2393.5], [118.0, 1847.0], [119.0, 2409.5], [121.0, 2043.3333333333335], [122.0, 2060.6666666666665], [123.0, 2398.5], [120.0, 3565.0], [125.0, 2422.0], [126.0, 1908.75], [127.0, 2462.5], [124.0, 3541.0], [128.0, 2109.3333333333335], [129.0, 2120.0], [130.0, 2486.0], [132.0, 2509.0], [133.0, 2127.3333333333335], [134.0, 2146.6666666666665], [135.0, 2514.5], [131.0, 3578.0], [136.0, 2000.75], [138.0, 2539.5], [139.0, 2561.5], [140.0, 2029.5], [141.0, 2578.5], [142.0, 2553.0], [143.0, 2543.0], [137.0, 3630.0], [144.0, 2220.3333333333335], [145.0, 1533.0], [147.0, 1999.8], [148.0, 2610.5], [149.0, 2621.5], [150.0, 2284.0], [151.0, 2263.6666666666665], [146.0, 3604.0], [154.0, 2304.3333333333335], [155.0, 2159.5], [157.0, 3001.6666666666665], [158.0, 1666.6666666666667], [159.0, 2983.0], [153.0, 3601.0], [152.0, 3665.0], [162.0, 2214.0], [163.0, 2360.6666666666665], [164.0, 2672.0], [165.0, 2386.3333333333335], [166.0, 1755.5], [167.0, 3639.0], [161.0, 3639.0], [160.0, 3670.0], [169.0, 2426.3333333333335], [170.0, 2737.5], [171.0, 2422.6666666666665], [172.0, 2735.0], [173.0, 2427.0], [174.0, 2429.6666666666665], [175.0, 3677.0], [168.0, 3666.0], [176.0, 2455.3333333333335], [178.0, 2335.25], [179.0, 2783.5], [180.0, 2508.3333333333335], [181.0, 2787.0], [182.0, 2807.0], [183.0, 3633.0], [177.0, 3670.0], [184.0, 2515.6666666666665], [185.0, 2519.0], [186.0, 2533.3333333333335], [187.0, 2829.5], [188.0, 2835.5], [189.0, 2556.0], [190.0, 2840.0], [191.0, 3689.0], [192.0, 2435.75], [193.0, 2577.0], [194.0, 2840.0], [195.0, 2857.0], [196.0, 2872.0], [197.0, 2872.0], [198.0, 2629.6666666666665], [199.0, 2111.5], [200.0, 3570.237171052625], [1.0, 3480.0]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}, {"data": [[187.08540417023733, 3384.202227934873]], "isOverall": false, "label": "GET /comanda/api/comandas-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2058.133333333333, "minX": 1.78900272E12, "maxY": 5401491.916666667, "series": [{"data": [[1.78900278E12, 1891451.9], [1.78900272E12, 5401491.916666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78900278E12, 2058.133333333333], [1.78900272E12, 5877.466666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3310.894716544543, "minX": 1.78900272E12, "maxY": 3593.5484581497826, "series": [{"data": [[1.78900278E12, 3593.5484581497826], [1.78900272E12, 3310.894716544543]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3165.6502121095236, "minX": 1.78900272E12, "maxY": 3449.5925110132152, "series": [{"data": [[1.78900278E12, 3449.5925110132152], [1.78900272E12, 3165.6502121095236]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78900272E12, "maxY": 0.1712302352487466, "series": [{"data": [[1.78900278E12, 0.0], [1.78900272E12, 0.1712302352487466]], "isOverall": false, "label": "GET /comanda/api/comandas", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 158.0, "minX": 1.78900272E12, "maxY": 7458.0, "series": [{"data": [[1.78900278E12, 3762.0], [1.78900272E12, 7458.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78900278E12, 3455.0], [1.78900272E12, 158.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78900278E12, 3716.0], [1.78900272E12, 3849.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78900278E12, 3755.0], [1.78900272E12, 4090.06]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78900278E12, 3566.0], [1.78900272E12, 3553.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78900278E12, 3731.0], [1.78900272E12, 4032.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2209.5, "minX": 17.0, "maxY": 4002.0, "series": [{"data": [[46.0, 3834.5], [47.0, 4002.0], [50.0, 4001.5], [51.0, 3725.0], [52.0, 3685.5], [53.0, 3564.0], [54.0, 3534.0], [55.0, 3578.0], [56.0, 2209.5], [57.0, 3543.0], [58.0, 3534.5], [59.0, 3515.0], [60.0, 3577.0], [61.0, 3531.0], [17.0, 3518.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2054.5, "minX": 17.0, "maxY": 3848.5, "series": [{"data": [[46.0, 3660.5], [47.0, 3839.0], [50.0, 3848.5], [51.0, 3575.5], [52.0, 3535.0], [53.0, 3414.0], [54.0, 3390.5], [55.0, 3436.0], [56.0, 2054.5], [57.0, 3403.0], [58.0, 3392.0], [59.0, 3377.0], [60.0, 3434.0], [61.0, 3393.0], [17.0, 3384.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.8, "minX": 1.78900272E12, "maxY": 46.55, "series": [{"data": [[1.78900278E12, 11.8], [1.78900272E12, 46.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.133333333333333, "minX": 1.78900272E12, "maxY": 43.21666666666667, "series": [{"data": [[1.78900278E12, 15.133333333333333], [1.78900272E12, 43.21666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78900278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.133333333333333, "minX": 1.78900272E12, "maxY": 43.21666666666667, "series": [{"data": [[1.78900278E12, 15.133333333333333], [1.78900272E12, 43.21666666666667]], "isOverall": false, "label": "GET /comanda/api/comandas-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.133333333333333, "minX": 1.78900272E12, "maxY": 43.21666666666667, "series": [{"data": [[1.78900278E12, 15.133333333333333], [1.78900272E12, 43.21666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78900278E12, "title": "Total Transactions Per Second"}},
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

