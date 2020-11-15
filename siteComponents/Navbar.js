import Link from 'next/link';

const Navbar = () => {
   return (
      <div>
         <span>
            <Link href="/box-office">
               <a>Box-Office</a>
            </Link>
         </span>
         <span>
            <Link href="/tictactoe">
               <a>TicTacToe</a>
            </Link>
         </span>
         <style jsx>{`
            a {
               color: white;
               border: 1px solid #049992;
               padding: 10px;
               margin: 30px;
            }
            span {
               margin-top: 20px;
            }
            div {
               background-color: #004643;
               height: 70px;
               display: flex;
               justify-content: center;
            }
         `}</style>
      </div>
   );
};

export default Navbar;
