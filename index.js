const blog1 = {
    title: "New Dawn",
    body: "facr cry franchies",
    auther: "Ubisoft",
    views: 2270,
    comments: [
        {
            auther: "Nethmina",
            body: "Hi this"
        },
        {
            auther: "Ravindu",
            body: "blog post"
        }
    ],
    isLive: true
}

// constructor function
function Post(title,body,auther){
    this.title=title,
    this.body=body,
    this.auther=auther,
    this.views=0,
    this.comments=[],
    this.isLive=false
}

console.log(new Post("a","b","c"))