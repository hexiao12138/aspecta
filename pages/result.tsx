import { useEffect } from 'react';
import Layout from '../components/layout';
import echarts from 'echarts';
import { resData } from './api/answer';
type EChartsOption = echarts.EChartsOption;
export default function Result() {
  const initData = () => {
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var progressDom = document.getElementById('progress')!;
    var progressChart = echarts.init(progressDom);
    var option: EChartsOption;
    option = {
      color: ['#cfbb56'],
      legend: {},
      radar: {
        name: {
          textStyle: {
            rich: {
              img: {
                backgroundColor: {
                  image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd00.paixin.com%2Fthumbs%2F1007168%2F29901265%2Fstaff_1024.jpg&refer=http%3A%2F%2Fd00.paixin.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671943411&t=8af81f1b59fff70a5577e43e0633c988'
                }
              }
            }
          },
          formatter: (value: string) => {
            var res = ''
            res += value + '{img|}'
            return res
          }
        },
        indicator: resData.candidates[0].skills.map((i, index, arr) => ({name: i.name,max: 100, axisLabel: {show: index === 0} })),
        radius: 80,
        startAngle: 90,
        splitNumber: 5,
        shape: 'circle',
        // axisName: {
        //   formatter: '【{value}】',
        //   color: '#000',
        //   fontWeight: 'bold',
        // },
        axisTick: {
          show: true
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['#fff'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#000',
            type: 'dashed'
          }
        }
      },
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4,
            }
          },
          data: [
            {
              value: resData.candidates[0].skills.map(i => i.score),
              name: '',
              areaStyle: {
                color: '#f7e47b'
              }
            }
          ]
        }
      ]
    };
    const progressOption = {
      title: {
        text: '75',
        textStyle: {
            color: '#000',
            fontSize: 40
        },
        subtext: '/100',
        subtextStyle: {
          color: '#909090',
        },
        itemGap: -10, // 主副标题距离
        left: 'center',
        top: 'center'
    },
    angleAxis: {
        max: 100, // 满分
        clockwise: false, // 逆时针
        // 隐藏刻度线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
    },
    radiusAxis: {
        type: 'category',
        // 隐藏刻度线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
    },
    polar: {
        // center: ['50%', '50%'],
        radius: '180%' //图形大小
    },
    series: [{
        type: 'bar',
        data: [{
            name: '作文得分',
            value: 75,
            itemStyle: {
                normal: {
                    color: '#1c3f87'
                }
            },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 5,
        barGap: '-100%', // 两环重叠
        z: 2,
    },{ // 灰色环
        type: 'bar',
        data: [{
            value: 100,
            itemStyle: {
                color: '#e2e2e2',
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 5,
                shadowOffsetY: 2
            }
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 5,
        barGap: '-100%', // 两环重叠
        z: 1
      }]
    }
    option && myChart.setOption(option);
    progressOption && progressChart.setOption(progressOption);
  }
  useEffect(() => {
    initData()
  }, [])
  return <Layout>
    <div className='border-2 border-[#cfcfcf] ml-5 pl-8 pb-10 bg-[#fff] lg:flex'>
      <div className='mt-5 flex-1'>
        <div className='skill-title relative text-[#475dba] bg-[#f9d84a] inline-block py-[8px] px-10 -translate-x-10'>Coding Skills
          <div className='icon w-2 h-2 -top-2'></div>
          <div className='triangle w-10 rotate-[135deg] -right-5'></div>
        </div>
        <div className='sm:flex'>
          <div>
            <div>
              <p>General Performance</p>
              <p>Score</p>
            </div>
            <div id='progress' className='w-full h-40'>

            </div>
          </div>
          <div id="main" className='w-full h-80'></div>
        </div>
      </div>
      <div className='flex-1 lg:mt-20'>
        <p>Sources by</p>
        <div>
           <span className='border rounded py-0.5 px-2 mr-1'>Github</span>
           <span className='border rounded py-0.5 px-2 mr-1'>stackoverflow</span>
           <span className='border rounded py-0.5 px-2'>Google Scholar</span>
        </div>
        <p>Highlight repositories related to Python</p>
        <div className='w-[300px]'>
          <div className='border border-[#93a5c6] px-2 rounded-lg'>
            <div className='text-[#5e82d5]'>HNE</div>
            <p className='text-[#b3bac8]'>Heterogeneous Network Embedding Survey. Benchmark Evauation and Beyond</p>
            <div className='text-[#b3bac8]'>
              <span>Python </span>
              <span>153 </span>
              <span>29</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {
          `
          .skill-title .icon {
            content: '';
            position: absolute;
            left: 0;
            background: #1e4087;
            clip-path: polygon(100% 0, 100% 100%, 0 100%)
          }
          .skill-title .triangle {
            content: '';
            position: absolute;
            top: 0;
            height: 100%;
            background: #fff;
            clip-path: polygon(100% 0, 100% 100%, 0 100%)
          }
          `
        }
      </style>
    </div>
  </Layout>
}
