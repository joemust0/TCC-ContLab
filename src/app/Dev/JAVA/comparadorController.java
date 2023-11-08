package app.Dev.JAVA;

@RestController
@RequestMapping("/api")

public class ComparadorController {

    @GetMapping("/comparar")
    public boolean compararValores(@RequestParam int valor1, @RequestParam int valor2) {
        return Comparador.compararValores(valor1, valor2);
    }
    
}
