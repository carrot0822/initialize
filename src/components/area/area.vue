<template>
  <div id="111" style="width:100%;height:100%"></div>
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    //这个是地图中心点的坐标哈 写props里方便改，写data里也行。不用非得跟我一样。
    center: {
      type: Array,
      default: () => {
        return [113.74947682142859, 22.835607857142858];
      }
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const option = {
        //amap地图配置
        amap: {
          center: this.center,
          resizeEnable: true,
          mapStyle: "amap://styles/whitesmoke", //地图样式白色
          rotation: 10,
          zoom: 10, //缩放
          viewMode: "3D", //是否启用3d地图
          pitch: 35, //视角高度
          skyColor: "#33216a"
        },
        animation: true,
        series: [
          //散点图层
          {
            type: "scatter",
            zlevel: 2,
            // 使用高德地图坐标系
            coordinateSystem: "amap",
            // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
            data: [], //数据格式[y,x,name]
            symbolSize: 5, //小点的大小
            encode: {
              //维度
              value: 2
            },
            label: {
              normal: {
                formatter: "{@[2]}", //title提示的文字@后为索引
                position: "right", //显示位置
                show: false
              },
              emphasis: {
                //重点显示
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#00c1de" //颜色
              }
            }
          },
          //攻击线图层
          {
            type: "lines",
            zlevel: 1,
            coordinateSystem: "amap",
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: "pin",
              symbolSize: 5,
              trailLength: 0
            },
            label: {
              normal: {
                formatter: function(params) {
                  let data = params.data;
                  return `从${data.fromName}到${data.endName}`;
                },
                position: "right", //显示位置
                show: false
              },
              emphasis: {
                //重点显示
                show: true
              }
            },
            lineStyle: {
              normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            //数据格式[
            data: {
              fromName: "111",
              endName: "222",
              coords: [
                [坐标, 坐标, 名称],
                [坐标, 坐标, 名称]
              ]
            }
          },
          //攻击线图层2
          {
            type: "lines",
            zlevel: 1,
            coordinateSystem: "amap",
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: "pin",
              symbolSize: 5,
              trailLength: 0
            },
            label: {
              normal: {
                formatter: function(params) {
                  let data = params.data;
                  return `从${data.fromName}到${data.endName}`;
                },
                position: "right", //显示位置
                show: false
              },
              emphasis: {
                //重点显示
                show: true
              }
            },
            lineStyle: {
              normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            data: {
              fromName: "111",
              endName: "222",
              coords: [
                [坐标, 坐标, 名称],
                [坐标, 坐标, 名称]
              ]
            } //和攻击线图层1的数据格式一样
          }
        ]
      };
      var chart = echarts.init(document.getElementById("111"));
      chart.setOption(option);
      // get amap instance
      var amap = chart
        .getModel()
        .getComponent("amap")
        .getAMap();
      // operations below are the same as amap
      //   amap.addControl(new AMap.Scale());
      //   amap.addControl(new AMap.ToolBar());
      // add layers
      //   var satelliteLayer = new AMap.TileLayer.Satellite();//卫星图层
      //   var roadNetLayer = new AMap.TileLayer.RoadNet();//道路图层
      //   amap.add([satelliteLayer, roadNetLayer]);
    }
  }
};
</script>
