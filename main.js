const vm = new Vue({
    el: '#app',
    data: {
        courses: []
    },
    methods: {
        showChildrenCourse(idCourse){
            // console.log(idCourse);
            
            this.courses.forEach(course => {
                if (course.pre != null) {
                    course.pre.forEach(pre => {
                        if (idCourse == pre) {
                            console.log(course.name);
                            course.status = true
                        }
                    });
                }
            });
        },
        loadCourses() {
            axios.get('./api/courses.json')
            .then(response => {
                // handle success
                this.courses = response.data
                console.log(this.courses);
            })
        }
    },
    mounted() {
        this.loadCourses()
    },
})