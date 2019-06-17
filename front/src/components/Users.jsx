import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, showUser, createUser, updateUser, deleteUser } from '../store/actions/user';
const defaultUser = {
  firstname: '',
  lastname: '',
  email: '',
  gender: ''
};
export class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      onCreate: true,
      ...defaultUser
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const buttonAction = this.state.onCreate ? 'Créer' : 'Mettre à jour';
    return (
      <div>
        <input type="num" value={this.state.userId} onChange={(e) => this.setState({ userId: e.target.value })} />
        <button
          onClick={() => this.props.showUser(this.state.userId)}
        >Fetch given user</button>
        <button
          onClick={() => this.setState({ ...this.state, ...defaultUser, onCreate: true, userId: null })}
        >
          Create new User
        </button>
        <ul>
          {
            this.props.user.users.map((user) => {
              return <li
                style={{ cursor: 'pointer' }}
                key={user.id}
              ><p
                onClick={() => this.setState({
                  ...this.state,
                  ...user,
                  onCreate: false,
                  userId: user.id
                })}
              >{user.email}</p>
                <button
                  onClick={async () => {
                    this.props.deleteUser(user.id);
                  }}
                >Delete ME</button>
              </li>;
            })
          }
        </ul>
        <div className="form">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (this.state.onCreate) {
                this.props.createUser(this.state);
              } else {
                this.props.updateUser(this.state, this.state.userId);
              }
            }}
          >
            <label htmlFor="firstname">Nom</label>
            <input type="text" id="firstname" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
            <label htmlFor="lastname">Prenom</label>
            <input type="text" id="lastname" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            <label htmlFor="gender">Genre</label>
            <input type="text" id="gender" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })} />
            <input type="submit" value={buttonAction} />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  fetchUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
