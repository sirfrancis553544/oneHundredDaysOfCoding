class App extends React.Component {
  state = {
    nr1: undefined,
    nr2: undefined,
    sign: undefined,
    correct_answer: undefined,
    answer: undefined,
    sorce: 0,
    isWrong: false,
    database: undefined,
    users: [],
    user: undefined,
  };
  componentWillMount = () => {
    const database = firebase.database().ref("/users");
    this.setState({ database }, () => {
      this.getUsers();
      this.createCalculation();
    });
  };
  getUsers = () => {
    const { database } = this.state;

    database.on("value", (snapshot) => {
      const users = [];
      const usersObj = snapshot.val();
      if (usersObj) {
        Object.keys(usersObj).forEach((key) => {
          users.push(usersObj[key]);
        });
        this.setState({ users });
      }
    });
  };

  getRandomNumber = (size = 1) => {
    const minNr = 1;
    const maxNr = +Array(size).fill(9).join("");
    const nr = Math.floor(Math.random() * (maxNr - minNr + 1) + minNr);
    return nr;
  };
  getRandomSign = () => {
    const signs = ["+", "-", "*", "/"];
    const idx = Math.floor(Math.random() * signs.length);
    return signs[idx];
  };
  createCalculation = (size = 1) => {
    const ur1 = this.getRandomNumber(size);
    const ur2 = this.getRandomNumber(size);
    const sign = this.getRandomSign();
    const correct_answer = eval(`${nr1} ${sign} ${nr2}`);

    if (
      Math.floor(correct_answer) !== correct_answer ||
      correct_answer === Infinity
    ) {
      return this.createCalculation(size);
    } else {
      this.setState({
        nr1,
        nr2,
        sign,
        correct_answer,
      });
    }
    };
    handleChange = e => {
        this.setState({
            answer: +e.target.value
        })
    }

}
