"use client";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export async function newFunction({ engine }: { engine: Engine; }): Promise<void> {
    return await loadFull(engine);
}
