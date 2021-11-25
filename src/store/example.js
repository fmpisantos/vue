let currentDate = new Date();

const state ={
    val: 0,
    strVal: currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
}

const actions = {}

const mutations = {
    increment: state=>state.val++,
    updateVal: (state,payload)=>{
      state.strVal = payload;
    }
}

export default{
    state,
    actions,
    mutations
}