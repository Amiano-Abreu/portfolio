import { FC, MouseEventHandler, ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

interface modalProps {
    open: boolean;
    onClose: MouseEventHandler<HTMLDivElement>;
    children: ReactNode;
}

const Modal:FC<modalProps> = ({open, onClose, children}) => {
    return (
        <div 
            className={`fixed inset-0 justify-center items-center transition-colors
                        ${open ? "visible bg-black/70" : "invisible"}
                    `}
            style={{
                zIndex: "99999"
            }}
            onClick={onClose}
        >
            <div
                onClick={e => e.stopPropagation()} 
                className={`bg-white rounded-xl shadow p-6 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                            `}
            >
                <button 
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal