this.largura / 2) {
      this.x = -this.largura / 2;
    } else if (this.velocidade < 0 && this.x < -this.largura / 2) {
      this.x = width + this.largura / 2;
    }
  }

  mostrar() {
    fill(this.cor);
    rect(this.x - this.largura / 2, this.y - this.altura / 2, this.largura, this.altura, 5); // Corpo do carro com bordas arredondadas
    fill(0); // Cor das rodas (preto)
    ellipse(this.x - this.largura * 0.3, this.y + this.altura * 0.3, this.altura * 0.6); // Roda traseira
    ellipse(this.x + this.largura * 0.3, this.y + this.altura * 0.3, this.altura * 0.6); // Roda dianteira
  }
}
