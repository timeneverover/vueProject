<template>
    <div class="modal fade" id="popModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel">{{popName}}</h4>
                </div>
                <div class="modal-body">
                    <form class="" action="index.html" method="post">
                        <div class="form-group" v-show="popName!='添加'">
                            <label for="inputId">id</label>
                            <input type="text" class="form-control" id="inputId" v-model="editData.id" :disabled="popName!='添加'">
                        </div>
                        <div class="form-group">
                            <label for="inputName">姓名</label>
                            <input type="text" class="form-control" id="inputName" v-model="editData.name" :disabled="popName=='删除'">
                        </div>
                        <div class="form-group">
                            <label for="inputAge">年龄</label>
                            <input type="number" class="form-control" id="inputAge" v-model="editData.age" :disabled="popName=='删除'">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button v-if="popName=='删除'" type="button" class="btn btn-danger" data-dismiss="modal" @click="delData()">确认删除</button>
                    <button v-else type="button" class="btn btn-success" data-dismiss="modal" @click="saveEditData()">保存</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Urls from '../publicService/urls.js';
export default {
    name: 'PopItem',
    data() {
        return{
            // editData: '',
        }
    },
    computed: {
        editData(){
            return this.$store.state.editData
        },
        popName(){
            return this.$store.state.popName
        }
    },
    mounted() {
        //页面一加载就执行
        
    },
    methods:{
        saveEditData(){
            if(this.editData.name && this.editData.age){
                //调用方法访问后台接口
                if(this.popName=='编辑'){
                    this.$store.dispatch('saveEditData',{index: this.editData.index,user_id:this.editData.id,name:this.editData.name,age:this.editData.age})
                }else if(this.popName=='添加'){
                    this.$store.dispatch('saveData',{name:this.editData.name,age:this.editData.age})
                }
            }else{
                this.tips.open('error','请填写正确的信息');
            }
        },
        delData(){
            this.$store.dispatch('delData',{user_id:this.editData.id});
        }
    }
}
</script>

<style lang="css">
</style>
