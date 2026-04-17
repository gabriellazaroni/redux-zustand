import { describe, expect, it } from "vitest";
import { player as reducer,play, playerSlice, nextVideo } from "./player";

describe('player slice', () => {
  it('should be able to play', () => {
    const inicialState = playerSlice.getInitialState()
    const state = reducer(inicialState, play([1, 2]))
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  })

  it('should be able to jump the next video automatically', () => {
    const inicialState = playerSlice.getInitialState()
    const state = reducer(inicialState, nextVideo())
    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to play the next module automatically', () => {
    const inicialState = playerSlice.getInitialState()

    const state = reducer({
      ...inicialState, currentLessonIndex: 5
    }, nextVideo())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })  

  it('should not update the current module and lesson index if there is no next lesson available', () => {
    const inicialState = playerSlice.getInitialState()

    const state = reducer({
      ...inicialState, 
      currentLessonIndex: 3,
      currentModuleIndex: 1
    }, nextVideo())
    
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(3)
  }) 
})