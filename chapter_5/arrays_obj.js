// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [{title: 'the ninja',likes:12},{title: 'hey ninja',likes:212}],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){          
         //arrow func work differently with this keyword this assigns a gloabal window object,ie it does not get updated , prefers the previous this value 
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(blog.title,blog.likes);
      })
    }
  };
  
  // console.log(this);
  user.logBlogs();