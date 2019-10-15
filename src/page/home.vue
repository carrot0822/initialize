<template>
    <div id="home">
        <div class="countBox">
            <panel-group></panel-group>
        </div>
        <div class="chartBox">

        </div>
    </div>
</template>

<script>
import PanelGroup from '../layout/home/panelGroup'
export default {
    components:{
        PanelGroup
    }
}
</script>

<style lang="scss" scoped>
#home{
    padding: 30px 20px;
    background-color: #f0f2f5;
}
</style>