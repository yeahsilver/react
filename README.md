## 👩🏻‍💻 React 정리

- ### virtural DOM

  - #### DOM(Document Object Model)

    - 객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성

    - 웹브라우저는 DOM을 활용하여 객체에 자바스크립트와 CSS를 적용.

    - DOM은 트리 형태라 특정 node를 찾거나 수정, 제거, 원하는 위치에 삽입 가능.

    - 동적 UI에 최적화 되어있지 않음.

    - DOM 자체는 빠르지만 웹 브라우저에서 DOM의 변화가 일어나면 웹 브러우저가 CSS를 다시 연산하고, 레이아웃을 구성하고 페이지를 리페인트하면서 시간이 허비가 됨. 

      => 그러므로 react에서는 virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화 하고 효율적으로 진행.

  

  </br>

  

  - #### Virtual DOM

    - 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용
    - DOM 업데이트 절차
      1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링합니다.
      2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교합니다.
      3. 바뀐 부분만 실제 DOM에 적용합니다.



</br>



------



</br>



- ### 코드 이해

  > import 키워드를 사용하여 모듈을 불러옴

  ```react
  import React, { Component } from 'react';
  import fs from 'fs';
  import logo from './logo.svg'; // file-loader를 통해 미디어 파일 불러오기
  import './App.css'; // css-loader를 통해 CSS 파일 불러오기
  
  // 이전 문법
  var React = require('react');
  var Component = React.Component;
  ```

  

  </br>

  

  >  Class 문법

  ```react
  class App extends Component{
  ...
  }
  ```

  

  </br>

  

  > Render(): 컴포넌트를 유저에게 어떻게 보일지 return
  >
  > 작은 따옴표나 큰 따옴표로 감싸지 않은 코드 = JSX

  ```react
  render(){
    return (
    	<div className="App">
      </div>
    )
  }
  ```

  

</br>



-----



</br>



- ### JSX

  - #### JSX 문법

    > 컴포넌트에 여러 요소가 있다면 부모 요소 하나로 꼭 감싸야한다. 

    ```react
    // 오류가 나는 코드
    import React, { Component } from 'react';
    
    class App extends Component{
      render(){
        return(
        	<h1> 리액트 </h1>
          <h2> Awesome </h2>
        )
      }
    }
    
    export default App;
    ```

    ```react
    // 오류가 나지 않는 코드 (div로 컴포넌트를 감싸줌)
    import React, { Component } from 'react';
    
    class App extends Component{
      render(){
        return(
          <div>
          	<h1> 리액트 </h1>
          	<h2> Awesome </h2>
          </div>
        )
      }
    }
    
    export default App;
    ```

    

    </br>

    

    > Fragment: div와 같은 것으로 감싸지 않고 여러 요소를 렌더링 하고 싶을 때 사용

    ```react
    import React, { Component } from 'react';
    
    class App extends Component{
      render(){
        return(
          <Fragment>
          	<h1> 리액트 </h1>
          	<h2> Awesome </h2>
          </Fragment>
        )
      }
    }
    
    export default App;
    ```

    

    </br>

    

    > 자바스크립트 표현: JSX 내부에서 코드를 { }로 감싸기.

    ```react
    import React, { Component } from 'react';
    
    class App extends Component{
      render(){
        const text = "Awesome"
        return(
          <div>
          	<h1> 리액트 </h1>
          	<h2> {text} </h2>
          </div>
        )
      }
    }
    
    export default App;
    ```

    

    </br>

    

    > 조건부 연산자 

    ```react
    import React, { Component } from 'react';
    
    class App extends Component{
      render(){
        const text = "Awesome"
        return(
          <div>
          	<h1> 리액트 </h1>
          	<h2> {text} </h2>
          	{
          		condition ? '참' : '거짓'
          	}
          </div>
        )
      }
    }
    
    export default App;
    ```

    

    </br>

    

    > 인라인 스타일링

    ```react
    import React, { Component } from 'react';
    
    class App extends Component{
      render(){
        const text = "Awesome"
        const condition = true;
        const style = {
        	backgroundColor: 'gray',
        	border: '1px solid black',
        	height: Math.round(Math.random() * 300) + 50,
        	width: Math.round(Math.random() * 300) + 50,
        	WebkitTransition: 'all',
        	MozTransition: 'all',
        	msTransition: 'all'
        };
        
        return(
          <div>
          	<h1> 리액트 </h1>
          	<h2> {text} </h2>
          	{condition && '보여주세요'}
          	<div style={style}></div>
          </div>
        )
      }
    }
    
    export default App;
    ```

    

    </br>

    

    > 꼭 닫아야 하는 태그 (input / br 등)

    ```react
    <form>
    	First name: <br/>
      <input type="text" name="firstname" /><br/>
      Last name: <br/>
      <input type="text" name="lastname" /><br/>
    </form>
    ```

    

