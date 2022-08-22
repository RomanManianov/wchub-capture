import {useState, useEffect, useRef} from 'react';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';
import {useHistory} from 'react-router';
import {v4} from 'uuid';

export default function Main() {
    const history = useHistory();
    const [rooms, updateRooms] = useState([]);
    const rootNode = useRef();

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            if (rootNode.current) {
                updateRooms(rooms);
            }
        });
    }, []);

    return (
        <div ref={rootNode}>
            <h1>Hello kitty!!!</h1>

            <ul>
                {rooms.map(roomID => (
                    <li key={roomID}>
                        {roomID}
                        <button onClick={() => {
                            history.push(`/capture/${roomID}`);
                        }}>JOIN ROOM
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={() => {
                history.push(`/capture/1`); // вместо 1 нужно втыкать временный айдишник пользака из шлюза
            }}>Войти в комнату
            </button>
        </div>
    );
}