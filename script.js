document.addEventListener('DOMContentLoaded', () => {
  const passwordDisplay = document.getElementById('password-display');
  const generateBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const feedbackMsg = document.getElementById('feedback-msg');

  // Função para gerar senha aleatória forte
  function generatePassword(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }

  // Evento ao clicar no botão de gerar
  generateBtn.addEventListener('click', () => {
    const newPassword = generatePassword();
    passwordDisplay.value = newPassword;
    feedbackMsg.textContent = 'Senha gerada com sucesso!';
    feedbackMsg.style.color = '#4ade80';
  });

  // Evento ao clicar no botão de copiar
  copyBtn.addEventListener('click', () => {
    if (!passwordDisplay.value) {
      feedbackMsg.textContent = 'Gere uma senha primeiro!';
      feedbackMsg.style.color = '#f87171';
      return;
    }

    navigator.clipboard.writeText(passwordDisplay.value).then(() => {
      feedbackMsg.textContent = 'Senha copiada para a área de transferência!';
      feedbackMsg.style.color = '#4ade80';
    }).catch(() => {
      feedbackMsg.textContent = 'Erro ao copiar a senha.';
      feedbackMsg.style.color = '#f87171';
    });
  });
});