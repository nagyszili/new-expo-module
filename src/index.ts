import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NewExpoModule.web.ts
// and on native platforms to NewExpoModule.ts
import NewExpoModule from './NewExpoModule';
import NewExpoModuleView from './NewExpoModuleView';
import { ChangeEventPayload, NewExpoModuleViewProps } from './NewExpoModule.types';

// Get the native constant value.
export const PI = NewExpoModule.PI;

export function hello(): string {
  return NewExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await NewExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(NewExpoModule ?? NativeModulesProxy.NewExpoModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NewExpoModuleView, NewExpoModuleViewProps, ChangeEventPayload };
