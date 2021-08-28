const e = React.createElement;

const AppNav = () => (
   <nav class="navbar navbar-dark bg-dark">
       <img class="logo-img" src="./assets/logo.png" alt="logo" />
       <a class="navbar-brand" href="#">Bloggitory</a>
       <a role="button" class="btn btn-outline-info navbar-btn" href="/login">Login</a>
   </nav>
);

class Home extends React.Component {
   constructor(props) {
       super(props);
   }

   render() {
       return (
           <div>
               <AppNav />
               <div class="card mt-4" Style="width: 100%;">
                   <div class="card-body">
                       Please login to see your posts. 
         </div>
               </div>
           </div>
       );
   }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Home), domContainer);