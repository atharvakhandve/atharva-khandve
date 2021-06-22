import { v4 as uuidv4 } from 'uuid'
import ProjectImg from '../images/projectImg.png'
import UTrackerImg from '../images/todo.jpg'
import GreenCtgImg from '../images/tictactoe.jpg'
import CoinTrackerImg from '../images/movie.jpg'
import CavinImg from '../images/chatbot.jpg'

const projects = [
  {
    id: uuidv4(),
    name: 'Todo List',
    desc:
      'A website that manage your daily tasks and manage them well. Using ReactJs and HTML&CSS.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Tic Tac Toe',
    desc:
      'A webpage implementing simple game of tic tac toe. Using ReactJs and HTML&CSS.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Movie Search',
    desc:
      'Search for any movie you want to get its description and rating using this webpage. Using ReactJs, HTML&CSS and The MovieDb API.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Chatbot",
    desc:
      'A chatbot trained on the movie conversation dataset. Using Seq2Seq models and a FAQ chatbot using cosine similarity.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Stock Perdiction',
    desc:
      'Predict the prices of stocks which is trained on a suitable dataset using Deep Learning and RNN. Language used: Python.',
    img: ProjectImg,
  },
]

export default projects
