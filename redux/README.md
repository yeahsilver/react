# Redux

- ### Store

  - 리덕스의 핵심

  - 정보가 저장되는 곳

  - ##### Store의 구성 요소

    - State: 절대로 직접 접속하지 못함.

    - Reducer함수

      - 중요) state값을 받고, action을 창조해서 새로운 state를 만들어 리턴

      ```react
      // reducer 생성
      function reducer(oldState, action){
      	//...
      }
      
      var store = Redux.creteStore(reducer)
      ```

    - dispatch

      - reducer를 호출하여 state 값을 바꿈. 그 후 subscribe를 이용하여 render함수를 호출해줌.

      - reducer에 전달하는 값: 현재의 state, action data 

        action data Ex) {type: 'create', payload: {title: title, desc:desc }

    - subscribe

      - 값이 바뀔 때 구동되는 함수들을 등록

      ```react
      store.subscribe(render);
      ```

    - getState



</br>



- #### Render

  - UI를 만들어주는 코드 등을 말함 ex) code

    ```react
    function render(){
      // state를 가지고 옴.
    	var state = store.getState();
    	//...
    	document.querySelector('#app').innerHTML = 
    	' <h1> Web </h1>
    	....
    	'
    } 
    ```

    

- #### 데이터 전송 방식

  > 1. render -> getState -> state -> getState -> render -> UI 생성
  > 2. state가 바뀔 때: render -> subscribe
  > 3. 글 목록 등을 추가할 때:  render-> action (type이 create) -> dispatch -> reducer -> state -> subscribe -> render -> getState -> state

  ```react
  <form onsubmit="
  	//...
  	store.dispatch({type: 'create', payload: {title: title, desc:desc })
  "
  ```

  

</br>



