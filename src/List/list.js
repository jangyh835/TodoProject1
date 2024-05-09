import React, {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const WriteData = [
  {
    name: "love",
    number: 1,
    description: "asdfasdf",
    deadline:"24/12/25"
  },
  {
      name: "love2",
      number: 2,
      description: "asdfasdf",
      deadline:"24/12/25"
    },
    {
      name: "love3",
      number: 3,
      description: "asdfasdf",
      deadline:"24/12/25"
    },
    {
      name: "love4",
      number: 4,
      description: "asdfasdf",
      deadline:"24/12/25"
    },
];

function ListCard() {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }

export default ListCard;
export const List = ()=> {
  const [number, setNumber] = useState(1);
  const plusState = () => {
      setNumber((prev) => prev + 1);
    };
  return<>
      <div>
    {WriteData.map((e, i) => {
        const temp = e.name;
        return <ListCard key={i} props={temp} />;
        })}
    </div>
  </>;
};

{/* export const List = ()=>{
  return
  {exampleStudent.map((e, i) => {
    const temp = e.name + "love";
    return <Card key={i} props={temp} />;
  })}; */}