var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var table;
    (function (table) {
        var T_FishGroup = (function () {
            function T_FishGroup() {
                //鱼群ID
                this.id = 0;
                //鱼群名称
                this.name = 0;
                //鱼群类型
                this.type = 0;
                //鱼群鱼的数量
                this.num = 0;
                //鱼群里鱼的id
                this.fishId = 0;
                //鱼群坐标
                this.pos = "";
                //移动ID
                this.move = "";
            }
            return T_FishGroup;
        }());
        table.T_FishGroup = T_FishGroup;
        __reflect(T_FishGroup.prototype, "game.table.T_FishGroup");
        var T_FishGroup_Table = (function () {
            function T_FishGroup_Table() {
            }
            T_FishGroup_Table.getVoByKey = function (key) {
                var len = _T_FishGroup_.length;
                var data = table.SerchUtil.binary_search(_T_FishGroup_, "id", 0, len, key);
                return data;
            };
            T_FishGroup_Table.getAllVo = function () {
                return _T_FishGroup_;
            };
            return T_FishGroup_Table;
        }());
        table.T_FishGroup_Table = T_FishGroup_Table;
        __reflect(T_FishGroup_Table.prototype, "game.table.T_FishGroup_Table");
        var _T_FishGroup_ = [
            { id: 1, name: 2220, type: 1, num: 7, fishId: 43, pos: "18.75,-42.5|86.25,-30|-33.75,-10|23.75,5|-86.25,10|76.25,17.5|28.75,42.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 2, name: 2220, type: 1, num: 6, fishId: 43, pos: "-27.5,-45|37.5,-37.5|70,2.5|-70,7.5|-20,30|47.5,45", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 3, name: 2220, type: 1, num: 9, fishId: 43, pos: "-26.25,-47.5|43.75,-40|91.25,-20|-63.75,-10|1.25,-7.5|31.25,20|96.25,20|-96.25,27.5|-36.25,47.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 4, name: 2220, type: 1, num: 3, fishId: 43, pos: "42.5,-25|-42.5,-17.5|30,25", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 5, name: 2220, type: 1, num: 4, fishId: 43, pos: "-5,-37.5|62.5,0|-62.5,5|10,37.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 101, name: 2221, type: 1, num: 7, fishId: 42, pos: "-2.5,-44.5|-60,-38|42.5,-18|-17.5,2|70,12|-70,22|27.5,44.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 102, name: 2221, type: 1, num: 6, fishId: 42, pos: "-71.25,-32.5|33.75,-30|-13.75,-2.5|73.75,7.5|-73.75,32.5|-3.75,32.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 103, name: 2221, type: 1, num: 6, fishId: 42, pos: "12.5,-28.75|-75,-16.25|75,-16.25|0,3.75|70,23.75|-42.5,28.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 104, name: 2221, type: 1, num: 3, fishId: 42, pos: "-52.5,-16.25|52.5,-11.25|-7.5,16.25", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 105, name: 2221, type: 1, num: 4, fishId: 42, pos: "38.75,-25|-38.75,-7.5|46.25,22.5|-46.25,25", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 201, name: 2222, type: 1, num: 7, fishId: 41, pos: "33.75,-41.25|-55.25,-31.25|58.75,-13.75|-1.25,-1.25|-58.75,16.25|56.75,18.75|8.75,41.25", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 202, name: 2222, type: 1, num: 6, fishId: 41, pos: "37.5,-33.75|10,-16.25|-32.5,3.75|50,6.25|-50,33.75|22.5,33.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 203, name: 2222, type: 1, num: 4, fishId: 41, pos: "-40.625,-11.25|100.625,-6.25|-100.625,-1.25|26.875,11.25", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 204, name: 2222, type: 1, num: 3, fishId: 41, pos: "-23.75,-17.5|41.25,7.5|-41.25,17.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 205, name: 2222, type: 1, num: 4, fishId: 41, pos: "31.25,-28.75|-53.75,-13.75|53.75,16.25|-28.75,28.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 301, name: 2223, type: 1, num: 6, fishId: 44, pos: "-64,-29|26,-29|71,-6.5|-24.5,3.5|28.5,16|-71,29", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 302, name: 2223, type: 1, num: 9, fishId: 44, pos: "5,-53.75|-52.5,-31.25|62.5,-23.75|-112.5,-13.75|25,11.25|112.5,11.25|-50,21.25|-100,51.25|47.5,53.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 303, name: 2223, type: 1, num: 5, fishId: 44, pos: "-20.75,-33.75|56.25,-18.75|-46.25,-1.75|23.75,17.75|-56.25,33.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 304, name: 2223, type: 1, num: 3, fishId: 44, pos: "-16.25,-23.75|31.25,8.75|-31.25,23.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 305, name: 2223, type: 1, num: 4, fishId: 44, pos: "3.75,-30|61.25,0|-61.25,7.5|26.25,30", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 401, name: 2224, type: 1, num: 7, fishId: 40, pos: "-88.75,-35|88.75,-27.5|-3.75,-20|-58.75,-2.5|68.75,5|16.25,27.5|-58.75,35", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 402, name: 2224, type: 1, num: 9, fishId: 40, pos: "-145,-40|82.5,-40|-45,-32.5|145,-2.5|-42.5,5|30,5|-95,22.5|102.5,32.5|30,40", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 403, name: 2224, type: 1, num: 5, fishId: 40, pos: "30,-62.5|45,-7.5|-45,2.5|2.5,30|-32.5,62.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 404, name: 2224, type: 1, num: 3, fishId: 40, pos: "71.25,-10|-1.25,2.5|-71.25,10", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 405, name: 2224, type: 1, num: 4, fishId: 40, pos: "5,-20|-65,-2.5|65,15|-12.5,20", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 501, name: 2225, type: 1, num: 6, fishId: 39, pos: "66.25,-38.25|-66.25,-27.75|98.75,-0.25|-21.25,1.25|-98.75,28.25|38.75,38.25", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 502, name: 2225, type: 1, num: 9, fishId: 39, pos: "101.25,-52.5|-33.75,-42.5|86.25,-17.5|-143.75,-15|-76.25,0|18.75,5|143.75,10|56.25,50|-63.75,52.5", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 503, name: 2225, type: 1, num: 5, fishId: 39, pos: "52.5,-43.75|-47.5,-38.75|75,6.25|-75,16.25|-5,43.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 504, name: 2225, type: 1, num: 3, fishId: 39, pos: "32.5,-43.75|-17.5,-1.25|-32.5,43.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 505, name: 2225, type: 1, num: 4, fishId: 39, pos: "-36.25,-28.75|81.25,-28.75|26.25,16.25|-81.25,28.75", move: "103901,103902,103903,103904,103905,103906,104001,104002,104003,104004,104005,104006,104101,104102,104103,104104,104105,104106,104201,104202,104203,104204,104205,104206,104301,104302,104303,104304,104305,104306,104401,104402,104403,104404,104405,104406", },
            { id: 1001, name: 2226, type: 2, num: 0, fishId: 0, pos: "28,1,1,96,103_111,113|28,1,1,-106,103_-91,113|22,2,1.1,-5,5_-45,30|28,1,1,96,-93_111,-83|28,1,1,-106,-93_-91,-83", move: "0", },
            { id: 1002, name: 2227, type: 2, num: 0, fishId: 0, pos: "29,1,0.9,130,88_75,100|29,1,0.9,-70,88_-125,100|22,2,1.1,20,0_-45,25|29,1,0.9,130,-88_75,-80|29,1,0.9,-70,-88_-125,-80", move: "0", },
            { id: 1003, name: 2228, type: 2, num: 0, fishId: 0, pos: "24,1,1.3,-60,111_-110,135|22,2,1,0,0_-50,20|24,1,1.3,-60,-111_-110,-90", move: "0", },
            { id: 1004, name: 2229, type: 2, num: 0, fishId: 0, pos: "30,1,1,88,108_28,113|30,1,1,-88,108_-148,113|22,2,1.1,0,0_-50,25|30,1,1,88,-108_28,-103|30,1,1,-88,-108_-148,-103", move: "0", },
            { id: 1005, name: 2230, type: 2, num: 0, fishId: 0, pos: "27,1,1.3,-60,111_-110,130|24,2,1,0,0_-50,25|27,1,1.3,-60,-111_-110,-95", move: "0", },
            { id: 1006, name: 2231, type: 2, num: 0, fishId: 0, pos: "30,1,1,-86,118.75_-146,123.75|30,1,1,8,68.75_-52,73.75|30,1,1,86,0_26.5,5|30,1,1,8,-68.75_-52,-63.75|30,1,1,-86,-118.75_-146,-113.75", move: "0", },
            { id: 1007, name: 2232, type: 2, num: 0, fishId: 0, pos: "32,1,0.8,81.75,-65_71.75,-120|32,1,0.8,-86.75,-65_-95,-120|32,2,0.75,-1.25,-5_-11.25,-55|32,1,0.8,81.75,60_71.75,11|32,1,0.8,-86.75,60_-95,11", move: "0", },
            { id: 1008, name: 2233, type: 2, num: 0, fishId: 0, pos: "36,1,0.85,0.75,56.25_-15.75,60|36,1,0.85,61.25,0.75_46.25,5|36,1,0.85,-61.25,0.75_-76.25,5|36,1,0.85,0.75,-56.25_-15.75,-55", move: "0", },
            { id: 1009, name: 2234, type: 2, num: 0, fishId: 0, pos: "39,1,0.8,83,182_68,177|39,1,0.8,178,123_163,118|39,1,0.8,83,64_68,60", move: "0", },
            { id: 1010, name: 2235, type: 2, num: 0, fishId: 0, pos: "40,1,0.8,58,231_35,231|40,1,0.8,58,154_35,154|40,1,0.8,58,79_35,81", move: "0", },
            { id: 1011, name: 2236, type: 2, num: 0, fishId: 0, pos: "35,1,0.9,58,229_38,241|35,1,0.9,208,154_188,166|35,1,0.9,58,154_38,166|35,1,0.9,58,78_38,90", move: "0", },
            { id: 10101, name: 2237, type: 1, num: 6, fishId: 43, pos: "0,-9|100,-9|200,-9|300,-9|400,-9|-100,-9", move: "0", },
            { id: 10102, name: 2238, type: 1, num: 5, fishId: 36, pos: "-80,204|0,42|0,172|-80,10|80,107", move: "0", },
            { id: 10103, name: 2239, type: 1, num: 1, fishId: 23, pos: "0,0", move: "0", },
            { id: 10104, name: 2240, type: 1, num: 2, fishId: 22, pos: "65,9|65,146", move: "0", },
            { id: 10105, name: 2241, type: 1, num: 5, fishId: 35, pos: "187,-5|295,38|383,78|187,183|295,133", move: "0", },
            { id: 10201, name: 2242, type: 1, num: 1, fishId: 24, pos: "0,0", move: "0", },
            { id: 10202, name: 2243, type: 1, num: 1, fishId: 22, pos: "0,0", move: "0", },
            { id: 10203, name: 2244, type: 1, num: 6, fishId: 43, pos: "-275,0|-165,0|-55,0|55,0|165,0|275,0", move: "0", },
            { id: 10301, name: 2245, type: 1, num: 16, fishId: 43, pos: "0,200|50,150|50,250|100,100|100,300|150,50|150,350|200,0|200,400|250,50|250,350|300,100|300,300|350,150|350,250|400,200|", move: "0", },
            { id: 10302, name: 2246, type: 1, num: 1, fishId: 27, pos: "0,0", move: "0", },
            { id: 10303, name: 2247, type: 1, num: 16, fishId: 44, pos: "0,200|50,150|50,250|100,100|100,300|150,50|150,350|200,0|200,400|250,50|250,350|300,100|300,300|350,150|350,250|400,200|", move: "0", },
            { id: 10304, name: 2248, type: 1, num: 16, fishId: 41, pos: "0,200|50,150|50,250|100,100|100,300|150,50|150,350|200,0|200,400|250,50|250,350|300,100|300,300|350,150|350,250|400,200|", move: "0", },
            { id: 10305, name: 2249, type: 1, num: 9, fishId: 40, pos: "0,60|0,130|0,200|0,270|0,340|100,200|100,110|100,290|200,200|", move: "0", },
            { id: 10306, name: 2250, type: 1, num: 3, fishId: 30, pos: "0,10|0,120|0,230|", move: "0", },
            { id: 10307, name: 2251, type: 1, num: 2, fishId: 29, pos: "0,0|0,130|", move: "0", },
            { id: 10308, name: 2252, type: 1, num: 9, fishId: 40, pos: "0,200|100,200|100,110|100,290|200,60|200,130|200,200|200,270|200,340|", move: "0", },
            { id: 10401, name: 2253, type: 1, num: 1, fishId: 103, pos: "0,0", move: "0", },
            { id: 10402, name: 2254, type: 1, num: 1, fishId: 14, pos: "0,0", move: "0", },
            { id: 10501, name: 2255, type: 1, num: 4, fishId: 35, pos: "150,0|0,130|260,130|150,260|", move: "0", },
            { id: 10502, name: 2256, type: 1, num: 4, fishId: 36, pos: "0,0|260,0|0,260|260,260|", move: "0", },
            { id: 10503, name: 2257, type: 1, num: 1, fishId: 30, pos: "0,0", move: "0", },
            { id: 10504, name: 2258, type: 1, num: 24, fishId: 44, pos: "0,200|4,160|17,120|40,80|80,40|200,0|320,40|360,80|383,120|396,160|400,200|4,240|17,280|40,320|80,360|200,400|320,360|360,320|383,280|396,240|140,20|260,20|140,380|260,380|", move: "0", },
            { id: 10505, name: 2259, type: 1, num: 1, fishId: 29, pos: "0,0", move: "0", },
            { id: 10506, name: 2260, type: 1, num: 5, fishId: 37, pos: "0,0|0,60|0,120|0,180|0,240|", move: "0", },
            { id: 10507, name: 2261, type: 1, num: 5, fishId: 36, pos: "0,0|0,90|0,180|0,270|0,360|", move: "0", },
            { id: 10508, name: 2262, type: 1, num: 4, fishId: 29, pos: "0,0|0,120|180,0|180,120|", move: "0", },
            { id: 10509, name: 2263, type: 1, num: 6, fishId: 36, pos: "0,0|0,90|0,180|100,0|100,90|100,180|", move: "0", },
            { id: 10701, name: 2264, type: 1, num: 12, fishId: 40, pos: "0,120|70,80|140,40|210,0|280,40|350,80|420,120|70,160|140,200|210,240|280,200|350,160|", move: "0", },
            { id: 10702, name: 2265, type: 1, num: 1, fishId: 34, pos: "0,0", move: "0", },
            { id: 10801, name: 2266, type: 1, num: 11, fishId: 43, pos: "0,50|50,90|100,130|150,170|200,210|250,250|200,290|150,330|100,370|50,410|0,450|", move: "0", },
            { id: 10802, name: 2267, type: 1, num: 11, fishId: 44, pos: "0,50|50,90|100,130|150,170|200,210|250,250|200,290|150,330|100,370|50,410|0,450|", move: "0", },
            { id: 10803, name: 2268, type: 1, num: 11, fishId: 41, pos: "0,50|50,90|100,130|150,170|200,210|250,250|200,290|150,330|100,370|50,410|0,450|", move: "0", },
            { id: 10901, name: 2269, type: 1, num: 2, fishId: 24, pos: "65,9|65,146|", move: "0", },
            { id: 10902, name: 2270, type: 1, num: 1, fishId: 12, pos: "0,0", move: "0", },
            { id: 10903, name: 2271, type: 1, num: 3, fishId: 35, pos: "0,0|0,240|120,120|", move: "0", },
            { id: 10904, name: 2272, type: 1, num: 3, fishId: 36, pos: "-10,125|120,0|120,240|", move: "0", },
            { id: 10905, name: 2273, type: 1, num: 3, fishId: 27, pos: "0,0|0,120|0,240|", move: "0", },
            { id: 10906, name: 2274, type: 1, num: 5, fishId: 41, pos: "0,0|0,50|0,100|0,150|0,200|", move: "0", },
            { id: 10907, name: 2275, type: 1, num: 5, fishId: 43, pos: "0,0|100,0|200,0|300,0|400,0|", move: "0", },
            { id: 10908, name: 2276, type: 1, num: 5, fishId: 38, pos: "187,40|295,120|383,200|187,360|295,280|", move: "0", },
            { id: 10909, name: 2277, type: 1, num: 3, fishId: 29, pos: "0,0|0,120|0,240|", move: "0", },
            { id: 11001, name: 2278, type: 1, num: 26, fishId: 43, pos: "-200,0|-200,50|-200,100|-200,150|-200,200|-200,250|-200,300|-200,350|-110,0|-20,0|70,0|160,0|250,0|340,0|-110,350|-20,350|70,350|160,350|250,350|340,350|340,50|340,100|340,150|340,200|340,250|340,300|", move: "0", },
            { id: 11002, name: 2279, type: 1, num: 18, fishId: 41, pos: "-100,0|-100,50|-100,100|-100,150|-100,200|-100,250|-10,0|80,0|170,0|260,0|-10,250|80,250|170,250|260,250|260,50|260,100|260,150|260,200|", move: "0", },
            { id: 11003, name: 2280, type: 1, num: 18, fishId: 44, pos: "-100,0|-100,50|-100,100|-100,150|-100,200|-100,250|-10,0|80,0|170,0|260,0|-10,250|80,250|170,250|260,250|260,50|260,100|260,150|260,200|", move: "0", },
            { id: 11004, name: 2281, type: 1, num: 26, fishId: 41, pos: "-200,0|-200,50|-200,100|-200,150|-200,200|-200,250|-200,300|-200,350|-110,0|-20,0|70,0|160,0|250,0|340,0|-110,350|-20,350|70,350|160,350|250,350|340,350|340,50|340,100|340,150|340,200|340,250|340,300|", move: "0", },
            { id: 11005, name: 2282, type: 1, num: 1, fishId: 18, pos: "0,0", move: "0", },
            { id: 12000, name: 2283, type: 3, num: 0, fishId: 0, pos: "44,0|43,500|42,1000|", move: "800101,800102", },
            { id: 12000, name: 2303, type: 3, num: 0, fishId: 0, pos: "44,0|43,500|42,1000|", move: "800101,800102", },
            { id: 20101, name: 2284, type: 1, num: 20, fishId: 43, pos: "-53,-120.25|71.5,-118.25|-104.5,-109.25|122.5,-100.25|-32,-85.75|36.5,-85.25|-138,-79.75|146.5,-69.75|-1,-51.25|-148.5,-42.75|148.5,-37.25|-135.5,-7.25|141,-1.75|-110,28.75|108,31.25|66,59.75|-70.5,60.25|-36,89.25|38,89.25|-2,120.25", move: "0", },
            { id: 20102, name: 2285, type: 1, num: 20, fishId: 44, pos: "-57.5,-116.75|66.5,-114.25|-107,-98.25|122.5,-95.25|-28,-88.75|34,-85.25|-122.5,-68.75|130,-62.75|0.5,-53.25|-135.5,-36.25|135.5,-26.75|-129.5,-5.25|131,6.75|-107,23.25|111,35.75|-68.5,54.75|76.5,60.25|-34,83.75|40,86.75|2,116.75", move: "0", },
            { id: 20103, name: 2286, type: 1, num: 18, fishId: 42, pos: "-69,-115.75|75.5,-114.25|-125,-93.25|135,-87.25|-35.5,-82.75|37.5,-81.25|-144.5,-62.75|152,-52.75|2,-44.25|-152,-24.25|148.5,-18.75|-135,12.75|125.5,18.25|-88,44.25|82.5,48.25|-43.5,81.25|40.5,81.75|8.5,115.75", move: "0", },
            { id: 20104, name: 2287, type: 1, num: 14, fishId: 36, pos: "-107,-116|93,-114.5|-44,-101.5|43.5,-94|143.5,-79|-144,-76.5|-4,-46.5|147,-19.5|-147,-11.5|106,31|-99,31.5|-47,70.5|54,73.5|1,116", move: "0", },
            { id: 20201, name: 2288, type: 1, num: 55, fishId: 41, pos: "-171.5,-217.25|90,-216.25|-102,-215.25|165,-214.75|-207,-188.75|-133,-186.25|-63,-184.75|64.5,-181.25|137,-179.75|212,-177.25|-225.5,-157.25|-137.5,-154.75|-51,-152.75|32.5,-148.25|123.5,-144.75|213.5,-142.25|-223,-122.25|-138,-117.25|-45,-114.75|44.5,-112.25|134.5,-109.75|223,-107.25|-234.5,-80.25|-134,-76.25|-38,-72.25|57,-67.25|152,-64.75|234.5,-64.75|-226,-40.75|-134.5,-37.25|-37,-34.75|57,-30.75|149,-26.75|234,-22.75|-215,-0.75|-125.5,3.75|-33,5.25|59.5,10.25|144.5,12.75|213,14.75|-185,42.25|-97.5,43.75|-5,45.25|86,47.75|173.5,50.25|-143.5,85.75|142,87.75|56,87.75|-38,87.75|-87,130.75|77,132.25|1,132.75|-45,169.25|48.5,170.75|-7,217.25", move: "0", },
            { id: 20202, name: 2289, type: 1, num: 53, fishId: 43, pos: "-162,-215.5|-92,-213.5|156,-212|82,-212|-57,-174|-132,-174|54,-173.5|128,-172.5|-208.5,-172|205,-171.5|-56.5,-137|39.5,-136.5|-227,-135|-139,-135|127.5,-134|224,-132.5|160,-96.5|82,-96.5|-76.5,-96.5|-0.5,-96|-157.5,-94|-236,-93.5|235,-92.5|238,-54.5|0,-54|72.5,-54|151.5,-53.5|-82.5,-52.5|-238,-50.5|-160,-49.5|227.5,-12|160.5,-11.5|86,-8.5|-146.5,-7|-68.5,-7|7.5,-7|-225,-6|201,31.5|120,33.5|45,37.5|-37.5,41.5|-197.5,43|-118.5,43|133,83.5|35,84.5|-52.5,84.5|-138,86|70,128.5|-7.5,129.5|-80,130|-40,168|27.5,170.5|-12.5,215.5", move: "0", },
            { id: 20301, name: 2290, type: 1, num: 37, fishId: 44, pos: "31,-205|-14.5,-202.5|-63,-197|69.5,-195.5|-61,-172.5|64.5,-171.5|54.5,-152|-63,-151.5|43,-132.5|-63.5,-130|32.5,-113|-65,-109|21,-91.5|-65.5,-86.5|2,-71|-65,-66.5|-17,-49.5|-67.5,-45.5|-66.5,-21.5|-67,23.5|-67.5,42.5|-26.5,45|-65.5,66|-9,68|-65,86|11,87|23.5,104.5|-67,113.5|34.5,128|-68.5,136|47.5,152.5|-69.5,158.5|57,176|-68.5,180.5|-29.5,196.5|66,198.5|21.5,205", move: "0", },
            { id: 20302, name: 2291, type: 1, num: 30, fishId: 41, pos: "15,-176.75|45,-161.75|-22.5,-158.25|57.5,-138.25|-32.5,-135.75|57,-116.25|-52.5,-115.75|-57.5,-93.25|57.5,-91.75|-55.5,-71.75|55,-65.75|-41,-46.75|52.5,-40.75|-8,-21.25|50.5,-17.75|51,6.75|-5,11.75|52.5,34.25|-45,44.25|50,59.25|-57.5,66.75|48.5,84.25|-57,91.25|48.5,108.25|-49,112.25|48.5,131.75|-39,136.25|47.5,156.25|-17.5,156.75|27.5,176.75", move: "0", },
            { id: 20303, name: 2292, type: 1, num: 22, fishId: 43, pos: "-4,-193.5|-38.5,-162.5|16.5,-160.5|-46.5,-130|25.5,-123.5|-51,-95.5|24,-89.5|-47.5,-58|16.5,-54|55,-31|-21.5,-22|-22.5,28|53.5,31|19.5,52|-49,57.5|24,88.5|-52.5,91.5|17.5,121.5|-52,129|16,158.5|-55,166.5|-16,193.5", move: "0", },
            { id: 20304, name: 2293, type: 1, num: 18, fishId: 44, pos: "-50.75,-138.25|-11.75,-110.25|-67.75,-107.25|19.75,-83.75|-47.25,-81.25|46.25,-59.25|-20.25,-55.25|67.75,-30.25|6.25,-26.75|67.75,37.75|5.75,38.25|-14.25,66.75|52.25,66.75|-35.25,92.25|33.75,94.25|-64.75,112.25|9.75,119.75|-35.25,138.25", move: "0", },
            { id: 20305, name: 2294, type: 1, num: 6, fishId: 41, pos: "-97.5,-17.25|-2.5,-15.25|95.5,-12.25|-95.5,10.25|0,13.25|97.5,17.25", move: "0", },
            { id: 20306, name: 2295, type: 1, num: 14, fishId: 36, pos: "-10.25,-202.25|-57.75,-157.75|25.25,-152.75|23.25,-86.75|-62.25,-85.25|62.25,-43.75|-20.25,-41.25|-22.25,23.25|62.25,51.25|24.75,81.25|-56.25,81.25|22.25,148.75|-55.25,151.25|-16.75,202.25", move: "0", },
            { id: 20307, name: 2296, type: 1, num: 18, fishId: 41, pos: "-22,-132|-56,-120.5|7,-110.5|-38,-98|22,-89.5|-18.5,-72|35.5,-66.5|-0.5,-47|51.5,-43.5|4,42|56,44.5|-17,62|37,67.5|-26,87|35,92|-35,109.5|22.5,114.5|-15,132", move: "0", },
            { id: 20308, name: 2297, type: 1, num: 6, fishId: 35, pos: "-127.5,-22.25|0,-22.25|127.5,-20.75|-127.5,20.25|126,21.75|-2.5,22.25", move: "0", },
            { id: 20401, name: 2298, type: 1, num: 31, fishId: 43, pos: "-62.5,-201|-10.5,-173.5|-60.5,-150|32,-144.5|-203,-112.5|74,-111|-60,-100|-149.5,-86|118.5,-77.5|-203.5,-61|-113.5,-58.5|-59,-47.5|161,-45|-203.5,-12.5|204,-6.5|97,-2.5|-61.5,3.5|-203,35|166,37|-61,53.5|-111,67|123,70|-204,82.5|-150.5,98|-59.5,102|81,105.5|-198,132|37.5,140|-59.5,152.5|-9.5,170|-59.5,201", move: "0", },
            { id: 20402, name: 2299, type: 1, num: 35, fishId: 44, pos: "-70.5,-197|-27.5,-178|-69,-155.5|4,-154|41,-127|-191,-119.5|-69,-115|76,-101.5|-145.5,-87.5|-193.5,-80|-70,-71.5|116.5,-69.5|-108.5,-56.5|-195,-43|161,-39.5|-68,-27|198.5,-7|-194,-4.5|88.5,-3.5|-69.5,18|170,25.5|-196,33|-112,53|133.5,56|-69.5,62|-198.5,75.5|-144.5,85.5|102.5,85.5|-69,107.5|56.5,112.5|-198.5,113.5|26.5,141.5|-67.5,153|-16.5,173|-68.5,197", move: "0", },
            { id: 20501, name: 2300, type: 1, num: 19, fishId: 43, pos: "8.75,-179.25|-7.25,-146.25|-27.75,-113.25|-48.75,-79.75|-63.75,-42.25|5.25,-35.75|62.75,-12.25|-84.75,-6.75|95.75,20.25|-104.25,26.25|108.25,60.25|-108.25,64.25|101.25,96.75|-108.25,102.25|86.25,132.75|-89.75,140.25|57.75,161.25|-54.25,168.25|2.75,179.25", move: "0", },
            { id: 20502, name: 2301, type: 1, num: 20, fishId: 44, pos: "20.75,-179.25|10.75,-149.25|-9.75,-119.25|-24.25,-89.75|-42.25,-59.25|6.25,-33.75|-61.75,-28.25|58.75,-12.75|-80.75,3.75|88.75,15.75|-99.25,37.25|107.75,50.25|-107.75,73.25|106.25,85.75|-98.75,110.75|96.25,120.75|-72.25,147.75|78.75,153.25|37.75,178.25|-31.75,179.25", move: "0", },
            { id: 20503, name: 2302, type: 1, num: 11, fishId: 36, pos: "1.5,-169.5|-33.5,-102|13,-35.5|-75,-34|81.5,-7.5|-105,38.5|105,67|-99,117|83.5,138.5|-47,166.5|27.5,169.5", move: "0", },
            { id: 20601, name: 2305, type: 1, num: 10, fishId: 43, pos: "142.25,-82|77.75,-81.5|-122.25,-79|-54.75,-79|12.75,-79|-149.25,80|149.25,80.5|78.25,81|-74.25,81.5|8.25,82", move: "0", },
            { id: 20602, name: 2306, type: 1, num: 10, fishId: 44, pos: "132.75,-49.75|-136.75,-49.25|-69.25,-48.75|1.25,-48.75|66.75,-48.75|136.75,47.75|-64.75,48.75|1.25,49.25|70.25,49.25|-134.75,49.75", move: "0", },
            { id: 20603, name: 2307, type: 1, num: 3, fishId: 35, pos: "-127.25,-0.25|0.25,-0.25|127.25,0.25", move: "0", },
            { id: 20604, name: 2308, type: 1, num: 11, fishId: 39, pos: "174.75,-60.5|102.25,-27|-285.25,-19.5|285.25,2|174.75,3|14.75,5.5|-98.75,5.5|-225.25,8|-285.25,35.5|103.25,43|174.25,60.5", move: "0", },
            { id: 20605, name: 2309, type: 1, num: 21, fishId: 43, pos: "-124,-192|-65,-149|-126,-147|-18,-113|-125.5,-101|34,-77|-126.5,-54|-46.5,-49|85.5,-42|131,-9|-129,-4.5|16.5,-3|88,28|-127.5,44|-47,46.5|42,65.5|-129.5,91|-9,103.5|-131,145|-54,146|-129,192", move: "0", },
            { id: 20606, name: 2310, type: 1, num: 4, fishId: 35, pos: "58.5,-60.5|-67.5,-59.5|-65,57.5|67.5,60.5", move: "0", },
            { id: 20607, name: 2311, type: 1, num: 17, fishId: 37, pos: "-118.75,-197.5|-48.75,-155|-120.25,-131.5|8.75,-107.5|-123.75,-65|-37.75,-62.5|71.25,-60|19.75,-7.5|126.25,0|-123.25,3.5|-37.75,40|73.75,50|-126.25,67.5|16.25,95|-123.75,132|-48.75,142.5|-123.75,197.5", move: "0", },
            { id: 20608, name: 2312, type: 1, num: 12, fishId: 41, pos: "-107.75,-67.5|-18.25,-65|78.75,-64|-80.25,-40|10.25,-39|107.75,-37.5|-89.75,30|7.25,34.5|103.75,39|-102.25,62.5|-17.25,64.5|79.75,67.5", move: "0", },
            { id: 20801, name: 2313, type: 1, num: 49, fishId: 44, pos: "-35.25,-168|39.75,-164|83.75,-133.5|23.25,-132|262.75,-113|30.25,-99.5|106.25,-95.5|282.75,-86.5|-322.75,-86|243.75,-67.5|35.75,-65|-285.75,-63.5|121.75,-62.5|305.25,-51|242.75,-32|-260.75,-31|179.75,-30|35.25,-28.5|112.75,-28.5|322.75,-23.5|-122.25,-21|-37.25,-18.5|-190.75,-6|35.25,-1|247.75,0.5|182.75,3.5|112.75,4|322.75,6.5|-257.75,9|-123.75,11|-42.75,16.5|245.25,35|32.75,36.5|185.25,38|117.75,39|307.75,39|-277.75,40|34.25,69|250.25,69|-305.25,71.5|117.25,73.5|300.25,76|27.75,101.5|90.75,107|282.75,108.5|7.75,134|69.25,135|44.25,164.5|-30.75,168", move: "0", },
            { id: 20802, name: 2314, type: 1, num: 33, fishId: 41, pos: "37,-204.75|52.5,-183.25|62.5,-160.25|73.5,-137.75|83.5,-115.75|96,-92.25|-255,-86.75|107.5,-69.25|-239,-62.75|117,-45.75|-218.5,-37.25|257.5,-24.25|-123,-22.75|-25,-22.25|72.5,-21.75|172.5,-21.25|-191.5,-9.25|256.5,5.25|72.5,5.25|172.5,5.25|-125,5.75|-27.5,6.75|-220,15.75|115,30.75|-242.5,40.75|103.5,56.25|-257.5,68.25|93,81.25|80,107.25|64.5,131.75|53.5,156.25|40,179.75|26,204.75", move: "0", },
            { id: 20803, name: 2315, type: 1, num: 37, fishId: 40, pos: "100,-223|149.5,-190|197,-155|50.5,-148.5|231.5,-123|109,-115|-42.5,-105|269,-82.5|-324.5,-77.5|148,-77|-4.5,-69.5|295,-40|-281.5,-37.5|48,-36|188.5,-36|324.5,6|-251.5,6|-179,6|-104,6|206.5,7.5|-26.5,7.5|95,8.5|296,40.5|189,42|47.5,42.5|-282.5,48|-5,77|149,80|275,82|-324,83|-45,104.5|237.5,119|107.5,120|202.5,151|55,152|165,186|121.5,223", move: "0", },
            { id: 20901, name: 2316, type: 1, num: 28, fishId: 36, pos: "-24,-209.75|45,-201.75|-58,-150.25|82.5,-140.25|-172,-111.75|-108,-107.75|144.5,-101.75|214.5,-82.25|-226.5,-74.25|-50.5,-46.75|67.5,-42.25|226.5,-3.75|-222,-1.25|3,4.75|-155.5,21.75|172,34.75|-59,50.75|63.5,53.25|-140,83.25|128.5,83.25|-177.5,139.75|174,144.25|-38.5,149.75|29.5,150.25|-154.5,198.75|137.5,203.75|67.5,209.25|-80.5,209.75", move: "0", },
            { id: 20902, name: 2317, type: 1, num: 26, fishId: 36, pos: "9.5,-197.5|-70,-185|79,-177.5|144,-143|-135,-142.5|28.5,-98.5|-35,-90|-177.5,-77.5|185,-75|84,-60|-82.5,-59|-0.5,-2.5|-202.5,2.5|202.5,5|95,10|-98,11|68,66.5|-66.5,73|182.5,85|-175,85|-2.5,90|-127.5,145|140,150|-72.5,177.5|80,185|-2.5,197.5", move: "0", },
            { id: 21001, name: 2318, type: 1, num: 26, fishId: 43, pos: "28,-193.75|-48,-190.25|90.5,-175.25|-96,-172.25|132.5,-147.25|-124,-142.75|161.5,-116.75|-155.5,-109.75|178,-82.75|-170.5,-71.75|187.5,-44.25|-183,-32.75|189.5,-4.25|-189.5,4.25|189.5,36.25|-188,44.25|173.5,76.25|-175.5,81.25|157,111.75|-159,119.25|131,146.75|-128,148.75|85,175.25|-85.5,176.25|29,192.25|-31,193.75", move: "0", },
            { id: 21002, name: 2319, type: 1, num: 13, fishId: 44, pos: "66.25,-153|84.25,-124.5|91.25,-94|86.25,-65|78.25,-35.5|52.25,-12|-1.75,6|-49.75,20|-78.75,42.5|-87.25,70.5|-91.25,100|-84.25,129.5|-57.75,153", move: "0", },
            { id: 21003, name: 2320, type: 1, num: 2, fishId: 38, pos: "-13.75,-96.25|13.75,96.25", move: "0", },
            { id: 21004, name: 2321, type: 1, num: 13, fishId: 38, pos: "25.25,-195.75|-87.25,-175.75|130.25,-143.25|-156.75,-118.25|180.25,-75.75|-197.75,-38.75|197.75,1.75|-189.25,48.25|189.25,74.75|-146.25,133.75|141.75,141.25|62.75,189.75|-58.25,195.75", move: "0", },
            { id: 21005, name: 2322, type: 1, num: 5, fishId: 36, pos: "-43,-53.5|53,-49.5|2,3|50.5,53|-53,53.5", move: "0", },
            { id: 100000, name: 2304, type: 3, num: 0, fishId: 0, pos: "43,0|43,2000|43,4000|43,6000|43,8000|43,10000|", move: "2001001", },
        ];
    })(table = game.table || (game.table = {}));
})(game || (game = {}));
//# sourceMappingURL=T_FishGroup.js.map