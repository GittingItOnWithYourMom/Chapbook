var games = document.getElementsByClassName('games')

function start_game(game) {
  window.alert('yo')
  if (game == 1){
    window.open('/carnival game/index.html')
  }
  if (game == 2){
    window.open('/universe escape/index.html')
  }
  if (game == 3){
    window.open('/inside out/index.html')
  }
  if (game == 4){
    window.open('/paradox escape/index.html')
  }
}

function FadeInSection(props) {
   const [isVisible, setVisible] = React.useState(true);
   const domRef = React.useRef();
   React.useEffect(() => {
     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => setVisible(entry.isIntersecting));
     });
     observer.observe(domRef.current);
     return () => observer.unobserve(domRef.current);
   }, []);
   return (
     <div
       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
       ref={domRef}
     >
       {props.children}
     </div>
   );
}