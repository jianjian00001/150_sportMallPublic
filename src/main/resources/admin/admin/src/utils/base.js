const base = {
    get() {
                return {
            url : "http://localhost:8080/sport/",
            name: "sport",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/sport/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "体育运动品商城"
        } 
    }
}
export default base
