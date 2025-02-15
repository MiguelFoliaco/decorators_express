import express, { Application } from "express";

type stateContext = {
  app: Application;
};
let state: stateContext = {
  app: express(),
};

// Funciones para acceder y actualizar el estado
function getState() {
  return state;
}

function setState(newState: stateContext) {
  state = { ...state, ...newState }; // Actualiza el estado con los nuevos valores
}

function setApp(app: Application) {
  state.app = app;
}

export { state, getState, setState, setApp };
