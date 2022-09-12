const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notificaiton = new Notification("Example Notification", {
        body: Math.random(),
        data: { hello: "world" },
        // icon: "logo.png"
        // tag: "Welcom Message"
      });

      notificaiton.addEventListener("erroor", (e) => {
        alert("error");
      });
    }
  });
});

let notificaiton;
let interval;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date();
    interval = setInterval(() => {
      notificaiton = new Notification("Comback please", {
        body: `You have been gone for ${Math.round(
          (new Date() - leaveDate) / 1000
        )} sec`,
        // icon: "come.png"
        tag: "Come back"
      });
    }, 3000);
  } else {
    if (interval) clearInterval(interval);
    if (notificaiton) notificaiton.close();
  }
});
