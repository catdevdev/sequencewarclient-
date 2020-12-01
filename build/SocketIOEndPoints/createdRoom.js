"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedRoomSocket = void 0;
var Room_1 = require("../Server/Storage/Schemas/Room");
var CreatedRoomSocket = /** @class */ (function () {
    //   socketIOEndPoint = new SocketIOEndPoint()
    function CreatedRoomSocket(socket, io, storage) {
        this.socket = socket;
        this.io = io;
        this.storage = storage;
        /* logic */
        socket.on('createRoom', function () {
            var user = storage.Users.GetById(socket.id);
            storage.Rooms.Add(new Room_1.Room(user));
            // rooms.push({
            //   id: shortID.generate(),
            //   creator: { id: socket.id, user },
            //   activated: false,
            //   configs: { limitPlayers: null, message: null, mode: null },
            //   users: [],
            // })
            // socket.emit('createdRoom', rooms[rooms.length - 1].id)
            socket.emit('createdRoom', storage.Rooms.Rooms[storage.Rooms.Rooms.length - 1].Id);
        });
    }
    return CreatedRoomSocket;
}());
exports.CreatedRoomSocket = CreatedRoomSocket;