import { Map } from 'immutable';

// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생섬함수 정의
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** Immutable 의 Map 으로 감싸기
const initialState = Map({
  color: 'red',
  number: 0,
});

// 리듀서 작성
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      // **** set 으로 특정 필드의 값을 설정
      return state.set('color', action.color);
    case INCREMENT:
      // **** update 는 현재 값을 읽어온 다음에 함수에서 정의한 업데이트 로직에 따라 값 변경
      return state.update('number', number => number + 1);
    case DECREMENT:
      // **** 마찬가지
      return state.update('number', number => number - 1);
    default:
      return state;
  }
}
