const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    // console.log(state, action);
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }

    //state值只能传递，不能使用
    if (action.type === 'addItem') { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))//默认的值
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    return state
}