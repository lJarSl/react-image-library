/* eslint-disable */
import { useState, useEffect, useRef } from "react";

const Task2 = function () {
  const [pages, setPages] = useState(0);

   const pagesRef = useRef(0);

  const handler = () => {
    // console.log(pagesRef.current);
    console.log("pages:", pagesRef.current);
  }

  // При первом рендере вешаем событие
  useEffect(() => {
    const timer = setInterval(handler, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    pagesRef.current = pages; 
  }, [pages]);

  const onCkickHandler = () => setPages(pages => pages + 1);

  return (
    <>
      <h3>Task2.</h3>
      <div>
        <p>Pages: {pages}.</p>
        <button onClick={onCkickHandler.bind(this)}>Increment</button>
      </div>
      <p>Result in the console.</p>
    </>
  );
};
export default Task2;



/* eslint-disable */
import { useState, useEffect } from "react";

const Task1 = () => {
  const [pages, setPages] = useState(0);

  // При первом рендере вешаем событие
  useEffect(() => {
    const timer = setInterval(() => {
      setPages(pages => pages + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h3>Task1.</h3>
      <p>Result pages: {pages}</p>
    </>
  );
};
export default Task1;