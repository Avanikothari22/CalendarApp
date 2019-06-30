import * as CONST from '@constants/actions';
export function startSpinner() {
	return { type: CONST.START_SPINNER };
}

export function stopSpinner() {
	return { type: CONST.STOP_SPINNER };
}