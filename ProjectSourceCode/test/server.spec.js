// ********************** Initialize server **********************************

const server = require('../src'); //TODO: Make sure the path to your index.js is correctly added

// ********************** Import Libraries ***********************************

const chai = require('chai'); // Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

// ********************** DEFAULT WELCOME TESTCASE ****************************

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });
});

// *********************** TODO: WRITE 2 UNIT TESTCASES **************************

// ********************************************************************************

//We are checking POST /add_user API by passing the user info in in incorrect manner (name cannot be an integer). This test case should pass and return a status 400 along with a "Invalid input" message.

  // Example Negative Testcase :
  // API: /add_user
  // Input: {id: 5, name: 10, dob: '2020-02-20'}
  // Expect: res.status == 400 and res.body.message == 'Invalid input'
  // Result: This test case should pass and return a status 400 along with a "Invalid input" message.
  // Explanation: The testcase will call the /add_user API with the following invalid inputs
  // and expects the API to return a status of 400 along with the "Invalid input" message.

  describe('Testing Add User API', () => {
    it('positive : /add_user', done => {
      // Refer above for the positive testcase implementation
      chai
      .request(server)
      .post('/add_user')
      .send({ 
        email:'johndoe@colorado.edu',
        userName: 'johndoe', 
        passwordHash: 'hashedPassword',
        firstName: 'John', 
        lastName: 'Doe', 
        Usercol: 'SomeValue',
        idPref: 1})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals('Success');
        done();
      });
    });
  
    // Example Negative Testcase :
    // API: /add_user
    // Input: {id: 5, name: 10, dob: '2020-02-20'}
    // Expect: res.status == 400 and res.body.message == 'Invalid input'
    // Result: This test case should pass and return a status 400 along with a "Invalid input" message.
    // Explanation: The testcase will call the /add_user API with the following invalid inputs
    // and expects the API to return a status of 400 along with the "Invalid input" message.
    it('Negative : /add_user. Checking invalid name', done => {
      chai
        .request(server)
        .post('/add_user')
        .send({
          email:'', // providing empty email
          userName: 'johndoe', 
          passWordHash: 'hashedPassword',
          firstName: 'John', 
          lastName: 'Doe',
          Usercol: 'SomeValue',
          idPref: 1})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equals('Invalid input');
          done();
        });
    });
  });
