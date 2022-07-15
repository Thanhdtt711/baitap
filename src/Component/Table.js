import React from 'react';
import Form from './Form';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListItem: [
                {
                    name: 'Nguyễn Thị Item',
                    age: 11
                },
                {
                    name: 'Nguyễn Thị Item2',
                    age: 12
                },
                {
                    name: 'Nguyễn Thị Item3',
                    age: 13
                },
                {
                    name: 'Nguyễn Thị Item4',
                    age: 14
                },
            ]
        }
    }

    addForm = (item) => {
        this.state.ListItem.push(item);
        this.setState({
            ListItem: this.state.ListItem
        })
    }
    delete(index) {
        this.state.ListItem = this.state.ListItem.filter(item => item.name !== index.name)
        this.setState({
            ListItem: this.state.ListItem
        })
    }
    render() {
        const tr = this.state.ListItem.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><a type="submit" onClick={()=>this.delete(item)} className="btn btn-danger">Đelete</a></td>
                </tr>
            )
        })
        return (
            <>
                <div className="col-8">
                    <table className="table">
                        <thead className="bg-info text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Tuổi</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tr}
                        </tbody>
                    </table>
                </div>
                <Form add={this.addForm} />
            </>
        );
    }
}

export default Table;
