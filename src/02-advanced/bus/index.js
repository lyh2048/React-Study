export const Bus = {
    callbackList: [],
    // 订阅
    subscribe(callback) {
        this.callbackList.push(callback)
    },
    // 发布
    publish(info) {
        this.callbackList.forEach(callback => {
            callback && callback(info)
        })
    }
}