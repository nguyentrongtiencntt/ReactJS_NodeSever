
var Tksoft = React.createClass({
    getInfo: function(){
        alert(this.props.children);
    },
    render: function(){
        return(
            <div>
                <h1 className="yellow">{this.props.ten}-{this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <button onClick={this.getInfo}>Get Info!</button>
                <Sub></Sub> 
            </div>    
        );
    }
});
var Sub = React.createClass({
    render: function(){
        return(
            <h3 className="yellow">Subject!</h3>
        );
    }
});

ReactDOM.render(
    <div>
        <Tksoft ten="Node JS" giangvien="Mr Khoa!">Node JS Tien</Tksoft>
        <Tksoft ten="React JS" giangvien="Mr Pho!">React JS Tien</Tksoft>
    </div>
, document.getElementById('root'));




