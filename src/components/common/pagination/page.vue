<template>
  <div class="w-page">
    <div class="pagetionBox">
      <ul class="pagination">
        <li class="page-prev">
          <a @click="prevClick"  class="prev" href="#">
            <svg
              t="1580195949197"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4493"
              width="20"
              height="20"
            >
              <path
                d="M906.78272 588.78976c-0.02048 8.4992-6.88128 15.36-15.38048 15.37024l-443.6992-0.01024 75.70432 191.68256c2.51904 6.42048 0.48128 13.76256-5.03808 17.90976-5.51936 4.16768-13.13792 4.1472-18.61632-0.09216l-376.5248-289.47456c-3.77856-2.89792-6.00064-7.41376-6.00064-12.16512 0-4.78208 2.22208-9.27744 6.00064-12.1856l376.5248-289.47456c2.7648-2.11968 6.06208-3.19488 9.37984-3.19488 3.23584 0 6.5024 1.03424 9.23648 3.10272 5.51936 4.1472 7.5776 11.48928 5.03808 17.90976L447.68256 419.84l443.71968-0.01024c8.4992 0.01024 15.36 6.88128 15.36 15.36L906.78272 588.78976z"
                p-id="4494"
                fill="#777777"
              />
            </svg>
          </a>
        </li>
        <!-- 页码处理 -->

          <li v-for="(item,index) of pageData" :key="index" class="page-number" :class="{active:activeIndex==index}">
          <a @click="pageNumberClick(index)"  href="#">{{item}}</a>
        </li>
        <!-- 下一个按钮 -->
        <li class="page-next">
          <a @click="nextClick" class="next" href="#">
            <svg
              t="1580195920917"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4995"
              width="20"
              height="20"
            >
              <path
                d="M906.77248 512c0 4.77184-2.21184 9.2672-5.9904 12.17536l-376.5248 289.4848c-2.7648 2.11968-6.06208 3.18464-9.3696 3.18464-3.25632 0-6.5024-1.03424-9.24672-3.09248-5.50912-4.15744-7.5776-11.48928-5.03808-17.90976l75.71456-191.67232L132.58752 604.17024c-8.48896 0-15.36-6.88128-15.36-15.36l0-153.6c0-8.48896 6.87104-15.36 15.36-15.36l443.72992 0-75.71456-191.68256c-2.53952-6.42048-0.47104-13.75232 5.04832-17.90976 5.50912-4.15744 13.12768-4.13696 18.60608 0.09216l376.5248 289.4848C904.56064 502.7328 906.77248 507.22816 906.77248 512z"
                p-id="4996"
                fill="#777777"
              />
            </svg>
          </a>
        </li>
      </ul>
      <!-- 补充额外的输入跳转框 -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Array,
      default: () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      activeIndex: 0 // 点击索引
    };
  },
  computed: {
    pageNumbers() {
      return this.pageData.length-1;
    }
  },
  /*
    mounted(){
        let prevLink = document.querySelector(".prev");
        let nextLink = document.querySelector(".next")
        let pagination = document.querySelector('pagination')
        let pageNumberLinks = document.querySelectorAll(".page-number a");
        let maxPageIndex = pageNumberLinks.length -1 ;
        // 给每个分页按钮绑定点击事件
        pageNumberLinks.forEach((pageNumberLink,activeIndex)=>{
            pageNumberLink.addEventListener("click",()=>{
                pageNumberLinks.forEach(pageNumberLink =>{
                    pageNumberLink.parentElement.classList.remove("active")
                })
                pageNumberLink.parentElement.classList.add("active")

                document.querySelector(".pagination").style.setProperty("--active-index",`${activeIndex}`)
                console.log( document.querySelector(".pagination").style.getPropertyValue("--active-index"),activeIndex,'有吗')
            })
        })
        // 前后按钮的点击事件
        prevLink.addEventListener("click",()=>{
            pageNumberLinks.forEach(pageNumberLink => {
                pageNumberLink.parentElement.classList.remove("active")
            })
            let activeIndex = Number( document.querySelector(".pagination").style.getPropertyValue("--active-index") )
            activeIndex = activeIndex > 0 ? activeIndex - 1 : 0; // 边界处理
            pageNumberLinks[activeIndex].parentElement.classList.add("active");
            document.querySelector(".pagination").style.setProperty("--active-index",`${activeIndex}`)
        })
        // 后点击事件
        nextLink.addEventListener("click",()=>{
            pageNumberLinks.forEach(pageNumberLink => {
                pageNumberLink.parentElement.classList.remove("active")
            })
            let activeIndex = Number( document.querySelector(".pagination").style.getPropertyValue("--active-index") )
            activeIndex = activeIndex < maxPageIndex ? activeIndex + 1 : maxPageIndex; // 边界处理
            pageNumberLinks[activeIndex].parentElement.classList.add("active");
            document.querySelector(".pagination").style.setProperty("--active-index",`${activeIndex}`)
        })
    },*/

  methods: {
    pageNumberClick(index) {
      this.activeIndex = index;
      console.log('这个嘛。。。',index)
      this.$emit("pageNuberClick", index);
    },
    prevClick() {
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
    },
    nextClick() {
        console.log(this.activeIndex,'现在的索引',this.pageNumbers)
      this.activeIndex =
        this.activeIndex < this.pageNumbers 
          ? this.activeIndex + 1
          :this.pageNumbers ;
    }
  }
};
</script>

<style lang="scss" scoped>
.w-page {
  .pagetionBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #eceffc;
    .pagination {
      --active-index: 0;
      display: flex;
      padding: 10px 20px;
      background: white;
      border-radius: 50px;
      box-shadow: 0 0.3px 0.6px rgba(0, 0, 0, 0.056),
        0 0.7px 1.3px rgba(0, 0, 0, 0.081), 0 1.3px 2.5px rgba(0, 0, 0, 0.1),
        0 2.2px 4.5px rgba(0, 0, 0, 0.119), 0 4.2px 8.4px rgba(0, 0, 0, 0.144),
        0 10px 20px rgba(0, 0, 0, 0.2);
      list-style-type: none;
      li {
        margin: 0 5px;
        &.page-number {
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          &:hover a {
            color: white;
            background: #777;
          }
          &.active a {
            color: white;
            background: #333;
          }
        }

        &.page-prev,
        &.page-next {
          font-weight: 700;
        }

        &.page-prev {
          margin-right: 20px;
        }

        &.page-next {
          margin-left: 20px;
        }
        a {
          display: block;
          line-height: 50px;
          font-size: 20px;
          font-weight: 600;
          text-decoration: none;
          color: #777;
          border-radius: 50%;
          transition: 0.3s;
          // svg不明的东西
          &.prev:hover path,
          &.next:hover path {
            fill: darken(#777, 50%);
          }
        }
      }
    }
  }
}
</style>