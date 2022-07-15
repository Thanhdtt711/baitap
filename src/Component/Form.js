import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
    }


    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault();
        e.target.reset()
        if (!this.state.name || !this.state.age) {
            alert('Chưa có dữ liệu');
            return;
        }
        this.props.add({
            name: this.state.name,
            age: this.state.age
        })
        this.setState({
            name : '',
            age : ''
        })

    }

    render() {
        return (
            <div className='col-4'>
                <h3 className='text-center text-muted'>Add ListItem</h3>
                <form method="POST" onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="col-12 my-1">
                            <input type="text" name="name" onChange={this.changeInput} className="form-control" placeholder="Tên*" />
                        </div>
                        <div className="col-12 my-1">
                            <input type="text" name='age' onChange={this.changeInput} className="form-control" placeholder="Tuổi*" />
                        </div>
                        <div className="col-12 my-1">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
