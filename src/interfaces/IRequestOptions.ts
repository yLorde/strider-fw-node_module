export interface IRequestOptions {
    body?: unknown;
    headers?: Record<string, string>;
    signal?: AbortSignal;
    timeout?: number;
    auth?: boolean;
    silent401?: boolean;
    /** Se true, o body é enviado exatamente como foi montado no front-end. */
    camelCase?: boolean;
    /**
     * Serializa o body com JSON.stringify sem toSnakeCase (payload já no formato esperado pelo endpoint).
     * Usado em estratégias: raiz em snake_case (icon_index) e `config` com chaves camelCase do StrategyConfig.
     */
    bodyAsIs?: boolean;
    /** Se true, não tenta path alternativo com/sem barra final em 404/405 (evita 2ª requisição). */
    skipSlashRetry?: boolean;
}