import { Pro } from './Minipro';
import { Cal } from './Calcu';
import { Pro2, Heading } from './minipro2';
import { myArray } from './array';
import { Conditional, Conditional2, Conditional3 } from './Conditional';
import { Game } from './Minipro3';
import { Bio } from './classcom';
import { Fourth } from './Classstateprops';
import { States, States2 } from './Usestate';
import { Stathook } from './Usestate2';
import { List } from './List';
import { Data } from './Listkey'
import { Event, Event2, Event3 } from './Event';
import { Funclass } from './Funclassss';
import { Form } from './Form';
import { Form2 } from './Form2';
import { Rase } from './Enter';
import { Todo } from './Todo';
import { Increase } from './Increase';
import { Acc } from './Acc';
import { api } from './api';
import { Con } from './Contexts';
// import { Childcontex2 } from './Childcontex2';
import { Incr } from './Incrclass';
import { Hookuseeffect } from './Hookuseeffect';
import { Useref } from './Useref';
import { Usereduce } from './Usereduce';
import { Usereduce2 } from './Usereduce2';
import { Usereduce3 } from './Usereduce3';
import { Useecall1 } from './Usecall';
import { Useme1 } from './Useme1';
import { Useme2 } from './Useme2';
import { Custom } from './Customhook1';
import { Previous } from './Previous';
import { Loop } from './Loop';
import { Synch } from './Callasyc';
import { Async } from './Async';
import { Callback } from './Callback';
import { Promises } from './Promises';
import { Promises2 } from './Promises2';
import { Promises3Chain } from './Promises3';
import { Promises4Multiplehandler } from './Promises4';
import { Promisesapi } from './PromisesApimethod';
import { Asyncawait } from './Asyncawait';
import { Asyncawait2 } from './Asyncawait2';
import { Trycatch } from './TrycatchError';
import { Trycatch2 } from './Trycatch2';
import { Fetch } from './Fetchapi';
import { Fetch2 } from './Fetchapi2';
import { Fetch3 } from './Fetchapi3';
import { Fetch4 } from './Fetchapi4';
import { FetchMethod } from './Fetchmethod';

function Allfil() {
  return (
    <>
      <div>
        <Pro />
        <Cal />
        <Heading />

        {myArray.map((value) => {
          return (
            <Pro2 key={value.id}
              name={value.name}
              occu={value.content}
              code={value.code}
            />
          );
        })}

        <Conditional />
        <Conditional2 />
        <Conditional3 />
        <Game />
        <Bio title='Class' />
        <Fourth title='World' />
        <States title='Function' />
        <States2 />
        <Stathook />
        <List />
        <Data />
        <Event />
        <Event2 />
        <Event3 />
        <Funclass />
        <Form />
        <Form2 />
        <Rase />
        <Todo />
        <Increase />

        <h2>Accordian</h2>
        {api.map((values) => {
          return (
            <Acc key={values.key}
              question={values.question}
              answer={values.answer} />
          )
        })}

        <Con />
        {/* <Childcontex2 /> */}
        <Incr />
        <Hookuseeffect />
        <Useref />
        <Usereduce />
        <Usereduce2 />
        <Usereduce3 />
        <Useecall1 />
        <Useme1 />
        <Useme2 />
        <Custom />
        <Previous />
        <Loop />
        <Synch />
        <Async />
        <Callback />
        <Promises />
        <Promises2 />
        <Promises3Chain />
        <Promises4Multiplehandler />
        <Promisesapi />
        <Asyncawait />
        <Asyncawait2 />
        <Trycatch />
        <Trycatch2 />
        <Fetch />
        <Fetch2 />
        <Fetch3 />
        <Fetch4 />
        <FetchMethod />


      </div>
    </>
  )
}

export { Allfil };