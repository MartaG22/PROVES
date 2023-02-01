const sortBtnList = (btn) => {
      let buttonList = document.getElementById(btn);
      let buttonArray = Array.from(buttonList.getElementsByTagName("BUTTON"))
      let main = buttonArray.shift(); 
      buttonList.append(main);
      buttonArray.sort((a, b) => {
              return a.textContent.localeCompare(b.textContent)
          })
          .forEach(li => buttonList.append(li));
  }
  