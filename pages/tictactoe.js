import TicTacToeApp from '../apps/game_tictactoe/TicTacToe'
import Head from 'next/head'

export default function tictactoe() {
   const styles = {
      display: 'flex',
      justifyContent: 'center',
   }

   return (
      <div style={styles}>
         <Head>
            <title>TicTacToe Game</title>
         </Head>

         <main>
            <TicTacToeApp />
         </main>

         <footer></footer>
      </div>
   )
}
