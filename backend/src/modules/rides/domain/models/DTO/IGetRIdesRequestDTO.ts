

export interface IGetRidesRequestDTO {
    customer_id: string;
    driver_id?: string | ParsedQs | string[] | ParsedQs[] | undefined;
}