import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import CalcButton from './CalcButton';
import Results from './Results';

const calcValues = [
  {row: ['.', '(', ')', 'M']},
  { row: [7, 8, 9, '-'] },
  { row: [4, 5, 6, '+'] },
  { row: [1, 2, 3, '*'] },
  { row: ['C', 0, '=', '/'] }
]

function Main() {

  const [buttonValue, setButtonValue] = useState(['0']);
  const [isAnswered, setIsAnswered] = useState(false);
  const [operatorClicked, setOperatorClicked] = useState(false);

  return (
    <>
      <Results
        buttonValue={buttonValue}
      />
      <main>
        {
          calcValues.map((obj, index) => {
            return (
              <Row
                className='button-row'
                key={index}
                xs={4}
                sm={4}
                md={4}
                lg={4}
              >
                {
                  obj.row.map((button, index) => {
                    return (
                      <Col 
                        xs sm md lg={3}
                        key={index}
                      >
                        <CalcButton
                          className='buttons'
                          value={button}
                          setButtonValue={setButtonValue}
                          buttonValue={buttonValue}
                          isAnswered={isAnswered}
                          setIsAnswered={setIsAnswered}
                          operatorClicked={operatorClicked}
                          setOperatorClicked={setOperatorClicked}
                        />
                      </Col>
                    );
                  })
                }
              </Row>
            )
          })
        }
      </main>
    </>
  )
}

export default Main;