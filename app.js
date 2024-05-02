var weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//comment in JS
var TaskManager = React.createClass({
  getInitialState: function(){return {list:[],task:''}},

  addTask: function(e){
    if(this.state.task==''){
      alert('Write a task first !');
    }else{
    this.setState({ list: this.state.list.concat([this.state.task]),task:''});
    }
    e.preventDefault();
  },

  removeItem: function(e) {
    var taskIndex = e.target.getAttribute('data-value');
    this.setState(this.state.list.splice(taskIndex, 1));
    return {list: this.state.list};
  },

  onChange: function(e) {
    this.setState({ task: e.target.value });
  },


  render: function (){
    return(
      <div>
        <div id="first-div">
          <h1>{weekDays[this.props.day]}</h1>
          <form onSubmit={this.addTask}>
            <input type="text" id="taskAdder" onChange={this.onChange} value={this.state.task}/>
            <button className="fa fa-plus-square-o" aria-hidden="true"></button>
          </form>
        </div>
        <ShowTask list={this.state.list} rmItem={this.removeItem} />
      </div>
    );
  }
});



var ShowTask = React.createClass({
  render: function() {
    return (
      <div id="list-container">
          {
              this.props.list.map((list, index) =>
                <p key={index}>
                  <span>{list}</span>
                  <i data-value={index} onClick={this.props.rmItem} className="fa fa-trash-o" aria-hidden="true"></i>
                </p>
              )
          }
      </div>
    )
  }

});

var DaysOfWeek = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Welcome to your task manager !</h1>
        <div className="day" id="lundi">
          <TaskManager day="0"/>
        </div>
        <div className="day">
          <TaskManager day="1" />
        </div>
        <div className="day">
          <TaskManager day="2"/>
        </div>
        <div className="day">
          <TaskManager day="3" />
        </div>
        <div className="day">
          <TaskManager day="4" />
        </div>
        <div className="day">
          <TaskManager day="5"/>
        </div>
        <div className="day" id="dimanche">
          <TaskManager day="6"/>
        </div>
      </div>
  )
  }
});

ReactDOM.render(<DaysOfWeek day/>, document.getElementById('container'));
